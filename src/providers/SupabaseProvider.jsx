import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const SupabaseContext = createContext({ supabase: null, session: null });

export function SupabaseProvider({ children }) {
    const [session, setSession] = useState(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <SupabaseContext.Provider value={{ supabase, session }}>
            {children}
        </SupabaseContext.Provider>
    );
}

export const useSupabase = () => useContext(SupabaseContext);
