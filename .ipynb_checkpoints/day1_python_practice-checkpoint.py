#!/usr/bin/env python3
"""
🚀 DAY 1 - Python Practice Script
Complete these exercises to start your Kaggle Grandmaster journey!
"""

print("🎯 Welcome to your Kaggle Grandmaster Journey!")
print("=" * 50)

# ========================================
# EXERCISE 1: Variables and Data Types
# ========================================
print("\n📝 Exercise 1: Variables and Data Types")

# TODO: Create variables for your name, age, and whether you want to become a Kaggle GM
your_name = "Your Name Here"  # Replace with your actual name
your_age = 25  # Replace with your actual age
want_to_be_gm = True  # Keep this True!

print(f"Name: {your_name}")
print(f"Age: {your_age}")
print(f"Want to be Kaggle GM: {want_to_be_gm}")

# ========================================
# EXERCISE 2: Lists and Basic Operations
# ========================================
print("\n📊 Exercise 2: Working with Lists")

# Sample data: Competition scores from different Kagglers
scores = [0.85, 0.92, 0.78, 0.96, 0.88, 0.91, 0.83]

# TODO: Calculate basic statistics
total_scores = sum(scores)
average_score = total_scores / len(scores)
max_score = max(scores)
min_score = min(scores)

print(f"Competition Scores: {scores}")
print(f"Total competitors: {len(scores)}")
print(f"Average Score: {average_score:.3f}")
print(f"Best Score: {max_score}")
print(f"Worst Score: {min_score}")

# ========================================
# EXERCISE 3: Loops and Conditions
# ========================================
print("\n🏆 Exercise 3: Medal Classification")

# TODO: Classify scores into medal categories
medal_counts = {"Gold": 0, "Silver": 0, "Bronze": 0, "No Medal": 0}

for score in scores:
    if score >= 0.95:
        medal_counts["Gold"] += 1
        print(f"Score {score}: 🥇 GOLD!")
    elif score >= 0.90:
        medal_counts["Silver"] += 1
        print(f"Score {score}: 🥈 Silver")
    elif score >= 0.80:
        medal_counts["Bronze"] += 1
        print(f"Score {score}: 🥉 Bronze")
    else:
        medal_counts["No Medal"] += 1
        print(f"Score {score}: No medal")

print(f"\nMedal Distribution: {medal_counts}")

# ========================================
# EXERCISE 4: Functions
# ========================================
print("\n🔧 Exercise 4: Functions")

def kaggle_performance_analyzer(scores_list):
    """
    Analyze Kaggle competition performance
    """
    analysis = {
        "total_competitions": len(scores_list),
        "average_score": sum(scores_list) / len(scores_list),
        "best_score": max(scores_list),
        "consistency": "High" if (max(scores_list) - min(scores_list)) < 0.1 else "Low"
    }
    return analysis

# TODO: Use the function
performance = kaggle_performance_analyzer(scores)
print("📈 Performance Analysis:")
for key, value in performance.items():
    print(f"  {key}: {value}")

# ========================================
# EXERCISE 5: Dictionary Practice
# ========================================
print("\n📚 Exercise 5: Kaggle Profile Simulation")

# TODO: Create a Kaggle profile dictionary
kaggle_profile = {
    "username": "future_grandmaster",  # Change this!
    "competitions_entered": 0,
    "medals": {"gold": 0, "silver": 0, "bronze": 0},
    "datasets_published": 0,
    "notebooks_published": 0,
    "followers": 0,
    "current_tier": "Novice"
}

print("🎯 Your Starting Kaggle Profile:")
for key, value in kaggle_profile.items():
    print(f"  {key}: {value}")

# ========================================
# EXERCISE 6: List Comprehensions (Preview)
# ========================================
print("\n⚡ Exercise 6: List Comprehensions (Advanced Preview)")

# TODO: Convert scores to percentages
score_percentages = [score * 100 for score in scores]
print(f"Scores as percentages: {score_percentages}")

# TODO: Find all scores above 90%
high_scores = [score for score in scores if score > 0.9]
print(f"Scores above 90%: {high_scores}")

# ========================================
# CHALLENGE: Mini Data Analysis
# ========================================
print("\n🏆 DAILY CHALLENGE: Mini Data Analysis")

# Sample dataset: Hours studied vs Competition score
study_hours = [10, 25, 15, 40, 20, 35, 12]
comp_scores = [0.85, 0.92, 0.78, 0.96, 0.88, 0.91, 0.83]

print("\n📊 Study Hours vs Competition Performance:")
for i in range(len(study_hours)):
    hours = study_hours[i]
    score = comp_scores[i]
    performance = "Excellent" if score > 0.9 else "Good" if score > 0.8 else "Needs Improvement"
    print(f"  {hours} hours → {score:.2f} score → {performance}")

# TODO: Find the most efficient studier (highest score per hour)
efficiency_scores = []
for i in range(len(study_hours)):
    efficiency = comp_scores[i] / study_hours[i]
    efficiency_scores.append(efficiency)

best_efficiency_index = efficiency_scores.index(max(efficiency_scores))
print(f"\n🎯 Most efficient learner:")
print(f"  {study_hours[best_efficiency_index]} hours → {comp_scores[best_efficiency_index]} score")
print(f"  Efficiency: {max(efficiency_scores):.4f} score per hour")

# ========================================
# YOUR DAILY COMMITMENT
# ========================================
print("\n💪 Daily Commitment Tracker")
print("I commit to:")
print("✅ 2 hours of focused learning daily")
print("✅ Consistent practice and coding")
print("✅ Never giving up on my Kaggle GM dream")
print("✅ Learning something new every day")

print("\n🚀 Tomorrow's Preview:")
print("- More advanced Python concepts")
print("- Working with real datasets")
print("- Introduction to NumPy")
print("- Your first data analysis!")

print("\n" + "="*50)
print("🎉 Congratulations on completing Day 1!")
print("You're officially on the path to becoming a Kaggle Grandmaster!")
print("Keep this momentum going! 💪")
print("="*50)

# ========================================
# BONUS: Your Progress Tracker
# ========================================
def update_daily_progress(day, completed_tasks):
    """Track your daily progress"""
    print(f"\n📅 Day {day} Progress:")
    print(f"✅ Tasks completed: {completed_tasks}")
    if completed_tasks >= 5:
        print("🏆 Outstanding work!")
    elif completed_tasks >= 3:
        print("👍 Good progress!")
    else:
        print("💪 Keep pushing!")

# TODO: Update this each day
update_daily_progress(1, 6)  # You completed 6 exercises today!
