# To be edited for better playlist generation

# Keywords for playlist genres
KEYWORD_GENRES = {
    "acoustic": ["acoustic"],
    "afrobeat": ["afrobeat"],
    "alt-rock": ["alt-rock"],
    "alternative": ["alternative"],
    "ambient": ["ambient"],
    "anime": ["anime"],
    "black-metal": ["black-metal"],
    "bluegrass": ["bluegrass"],
    "blues": ["blues"],
    "bossanova": ["bossanova"],
    "brazil": ["brazil"],
    "breakbeat": ["breakbeat"],
    "british": ["british"],
    "cantopop": ["cantopop"],
    "chicago-house": ["chicago-house"],
    "children": ["children"],
    "chill": ["chill"],
    "classical": ["classical"],
    "club": ["club"],
    "comedy": ["comedy"],
    "country": ["country"],
    "dance": ["dance"],
    "dancehall": ["dancehall"],
    "death-metal": ["death-metal"],
    "deep-house": ["deep-house"],
    "detroit-techno": ["detroit-techno"],
    "disco": ["disco"],
    "disney": ["disney"],
    "drum-and-bass": ["drum-and-bass"],
    "dub": ["dub"],
    "dubstep": ["dubstep"],
    "edm": ["edm"],
    "electro": ["electro"],
    "electronic": ["electronic"],
    "emo": ["emo"],
    "folk": ["folk"],
    "forro": ["forro"],
    "french": ["french"],
    "funk": ["funk"],
    "garage": ["garage"],
    "german": ["german"],
    "gospel": ["gospel"],
    "goth": ["goth"],
    "grindcore": ["grindcore"],
    "groove": ["groove"],
    "grunge": ["grunge"],
    "guitar": ["guitar"],
    "happy": ["happy"],
    "hard-rock": ["hard-rock"],
    "hardcore": ["hardcore"],
    "hardstyle": ["hardstyle"],
    "heavy-metal": ["heavy-metal"],
    "hip-hop": ["hip-hop"],
    "holidays": ["holidays"],
    "honky-tonk": ["honky-tonk"],
    "house": ["house"],
    "idm": ["idm"],
    "indian": ["indian"],
    "indie": ["indie"],
    "indie-pop": ["indie-pop"],
    "industrial": ["industrial"],
    "iranian": ["iranian"],
    "j-dance": ["j-dance"],
    "j-idol": ["j-idol"],
    "j-pop": ["j-pop"],
    "j-rock": ["j-rock"],
    "jazz": ["jazz"],
    "k-pop": ["k-pop"],
    "kids": ["kids"],
    "latin": ["latin"],
    "latino": ["latino"],
    "malay": ["malay"],
    "mandopop": ["mandopop"],
    "metal": ["metal"],
    "metal-misc": ["metal-misc"],
    "metalcore": ["metalcore"],
    "minimal-techno": ["minimal-techno"],
    "movies": ["movies"],
    "mpb": ["mpb"],
    "new-age": ["new-age"],
    "new-release": ["new-release"],
    "opera": ["opera"],
    "pagode": ["pagode"],
    "party": ["party"],
    "philippines-opm": ["philippines-opm"],
    "piano": ["piano"],
    "pop": ["pop"],
    "pop-film": ["pop-film"],
    "post-dubstep": ["post-dubstep"],
    "power-pop": ["power-pop"],
    "progressive-house": ["progressive-house"],
    "psych-rock": ["psych-rock"],
    "punk": ["punk"],
    "punk-rock": ["punk-rock"],
    "r-n-b": ["r-n-b"],
    "rainy-day": ["rainy-day"],
    "reggae": ["reggae"],
    "reggaeton": ["reggaeton"],
    "road-trip": ["road-trip"],
    "rock": ["rock"],
    "rock-n-roll": ["rock-n-roll"],
    "rockabilly": ["rockabilly"],
    "romance": ["romance"],
    "sad": ["sad"],
    "salsa": ["salsa"],
    "samba": ["samba"],
    "sertanejo": ["sertanejo"],
    "show-tunes": ["show-tunes"],
    "singer-songwriter": ["singer-songwriter"],
    "ska": ["ska"],
    "sleep": ["sleep"],
    "songwriter": ["songwriter"],
    "soul": ["soul"],
    "soundtracks": ["soundtracks"],
    "spanish": ["spanish"],
    "study": ["study"],
    "summer": ["summer"],
    "swedish": ["swedish"],
    "synth-pop": ["synth-pop"],
    "tango": ["tango"],
    "techno": ["techno"],
    "trance": ["trance"],
    "trip-hop": ["trip-hop"],
    "turkish": ["turkish"],
    "work-out": ["work-out"],
    "world-music": ["world-music"],

    # Non native genre mappings
    "rap": ["hip-hop"],
    "trap": ["hip-hop"],
    
    # High Energy
    "hype": ["dance", "electronic", "hip-hop"],
    "party": ["dance", "pop", "hip-hop"],
    "workout": ["hip-hop", "electronic", "dance"],
    
    # Low Energy
    "calm": ["ambient", "classical", "chill"],
    "chill": ["ambient", "classical", "chill"],
    "sleep": ["ambient", "classical", "piano"],
    "study": ["classical", "piano", "ambient"],
    
    # Other Moods/Activities
    "sad": ["indie", "alternative", "piano"],
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