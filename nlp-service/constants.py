# To be edited for better playlist generation

# Keywords for playlist genres
KEYWORD_GENRES = {
    # High Energy
    "hype": ["dance", "electronic", "hip-hop"],
    "party": ["dance", "pop", "hip-hop"],
    "workout": ["hip-hop", "electronic", "dance"],
    
    # Low Energy
    "calm": ["ambient", "classical", "chill"],
    "chill": ["ambient", "classical", "chill"],
    "sleep": ["ambient", "classical", "piano"],
    "study": ["classical", "piano", "ambient"],
    
    # Other
    "sad": ["indie", "alternative", "piano"],
    "rock": ["rock", "alternative", "hard-rock"],
    "default": ["pop"]
}

# System prompt for OpenAI
SYSTEM_PROMPT = """You are a music expert that converts text descriptions into Spotify audio features. Consider these use cases and their extreme characteristics:

- Workouts/Exercise: very high energy (0.9-1.0), high tempo (140-180), very loud (-5 to -2), high danceability (0.8-1.0)
- Relaxation/Sleep: very low energy (0.0-0.2), slow tempo (50-80), very quiet (-20 to -15), high acousticness (0.8-1.0)
- Party/Club: maximum danceability (0.9-1.0), very high energy (0.9-1.0), club tempo (125-140), loud (-6 to -3)
- Focus/Study: low energy (0.2-0.4), low speechiness (0.0-0.2), very high instrumentalness (0.8-1.0)
- Hype/Anthems: maximum energy (0.9-1.0), very loud (-4 to -1), high tempo (130-160), high liveness (0.7-1.0)
- Chill/Ambient: low energy (0.1-0.2), high acousticness (0.7-1.0), low speechiness (0.0-0.2)
- Sad/Emotional: low valence (0.0-0.2), moderate energy (0.3-0.5), high acousticness (0.7-1.0), minor mode (0)
- Rage/Intense: maximum energy (0.9-1.0), maximum loudness (-3 to 0), low valence (0.2-0.4), low acousticness (0.0-0.2)

Always lean towards extreme values when the description suggests intensity in any direction. Avoid middle-range values (0.4-0.6) unless specifically warranted.
Respond with only a JSON object."""

# User prompt template
USER_PROMPT_TEMPLATE = """
Convert this playlist description into a JSON object with these Spotify audio features:
Description: "{text}"

Include only these features with appropriate ranges based on the context:
- valence (0-1): emotional positivity
- energy (0-1): intensity and activity
- danceability (0-1): how suitable for dancing
- acousticness (0-1): how acoustic vs electronic
- instrumentalness (0-1): likelihood of no vocals
- speechiness (0-1): presence of spoken words
- liveness (0-1): presence of live audience
- tempo (60-180): BPM
- loudness (-60-0): dB
- mode (0 or 1): minor/major key
- key (0-11): musical key
"""