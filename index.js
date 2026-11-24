(() => {
  'use strict';

  const FLASH_TMDB_ID = 60735;
  const STREAM_BASE_URL = 'http://hls03.cdnvideo11.shop';

  const FLASH_METADATA = {
    id: `tv/${FLASH_TMDB_ID}`,
    title: 'The Flash',
    href: `tv/${FLASH_TMDB_ID}`,
    image: 'https://image.tmdb.org/t/p/original/8H6rnhVBxSD2sncwJZWgEfj3b7X.jpg',
    poster: 'https://image.tmdb.org/t/p/original/8H6rnhVBxSD2sncwJZWgEfj3b7X.jpg',
    backdrop: 'https://image.tmdb.org/t/p/original/8H6rnhVBxSD2sncwJZWgEfj3b7X.jpg',
    description: 'Watch The Flash completely for free!',
    year: '2014',
    type: 'tv'
  };

  // Hardcoded Database of all 184 Episodes
  const EPISODES_DB = {
    1: {
      1: "Pilot", 2: "Fastest Man Alive", 3: "Things You Can't Outrun", 4: "Going Rogue",
      5: "Plastique", 6: "The Flash Is Born", 7: "Power Outage", 8: "Flash vs. Arrow",
      9: "The Man in the Yellow Suit", 10: "Revenge of the Rogues", 11: "The Sound and the Fury",
      12: "Crazy for You", 13: "The Nuclear Man", 14: "Fallout", 15: "Out of Time",
      16: "Rogue Time", 17: "Tricksters", 18: "All Star Team Up", 19: "Who Is Harrison Wells?",
      20: "The Trap", 21: "Grodd Lives", 22: "Rogue Air", 23: "Fast Enough"
    },
    2: {
      1: "The Man Who Saved Central City", 2: "Flash of Two Worlds", 3: "Family of Rogues",
      4: "The Fury of Firestorm", 5: "The Darkness and the Light", 6: "Enter Zoom",
      7: "Gorilla Warfare", 8: "Legends of Today", 9: "Running to Stand Still",
      10: "Potential Energy", 11: "The Reverse-Flash Returns", 12: "Fast Lane",
      13: "Welcome to Earth-2", 14: "Escape from Earth-2", 15: "King Shark",
      16: "Trajectory", 17: "Flash Back", 18: "Versus Zoom", 19: "Back to Normal",
      20: "Rupture", 21: "The Runaway Dinosaur", 22: "Invincible", 23: "The Race of His Life"
    },
    3: {
      1: "Flashpoint", 2: "Paradox", 3: "Magenta", 4: "The New Rogues",
      5: "Monster", 6: "Shade", 7: "Killer Frost", 8: "Invasion!",
      9: "The Present", 10: "Borrowing Problems from the Future", 11: "Dead or Alive",
      12: "Untouchable", 13: "Attack on Gorilla City", 14: "Attack on Central City",
      15: "The Wrath of Savitar", 16: "Into the Speed Force", 17: "Duet",
      18: "Abra Kadabra", 19: "The Once and Future Flash", 20: "I Know Who You Are",
      21: "Cause and Effect", 22: "Infantino Street", 23: "Finish Line"
    },
    4: {
      1: "The Flash Reborn", 2: "Mixed Signals", 3: "Luck Be a Lady",
      4: "Elongated Journey Into Night", 5: "Girls' Night Out", 6: "When Harry Met Harry...",
      7: "Therefore I Am", 8: "Crisis on Earth-X, Part 3", 9: "Don't Run",
      10: "The Trial of The Flash", 11: "The Elongated Knight Rises", 12: "Honey, I Shrunk Team Flash",
      13: "True Colors", 14: "Subject 9", 15: "Enter Flashtime", 16: "Run, Iris, Run",
      17: "Null and Annoyed", 18: "Lose Yourself", 19: "Fury Rogue", 20: "Therefore She Is",
      21: "Harry and the Harrisons", 22: "Think Fast", 23: "We Are The Flash"
    },
    5: {
      1: "Nora", 2: "Blocked", 3: "The Death of Vibe", 4: "News Flash",
      5: "All Doll'd Up", 6: "The Icicle Cometh", 7: "O Come, All Ye Thankful",
      8: "What's Past Is Prologue", 9: "Elseworlds, Part 1", 10: "The Flash & The Furious",
      11: "Seeing Red", 12: "Memorabilia", 13: "Goldfaced", 14: "Cause and XS",
      15: "King Shark vs. Gorilla Grodd", 16: "Failure Is an Orphan", 17: "Time Bomb",
      18: "Godspeed", 19: "Snow Pack", 20: "Gone Rogue", 21: "The Girl with the Red Lightning",
      22: "Legacy"
    },
    6: {
      1: "Into the Void", 2: "A Flash of the Lightning", 3: "Dead Man Running",
      4: "There Will Be Blood", 5: "Kiss Kiss Breach Breach", 6: "License to Elongate",
      7: "The Last Temptation of Barry Allen, Pt. 1", 8: "The Last Temptation of Barry Allen, Pt. 2",
      9: "Crisis on Infinite Earths: Part Three", 10: "Marathon", 11: "Love Is a Battlefield",
      12: "A Girl Named Sue", 13: "Grodd Friended Me", 14: "Death of the Speed Force",
      15: "The Exorcism of Nash Wells", 16: "So Long and Goodnight", 17: "Liberation",
      18: "Pay the Piper", 19: "Success Is Assured"
    },
    7: {
      1: "All's Wells That Ends Wells", 2: "The Speed of Thought", 3: "Mother",
      4: "Central City Strong", 5: "Fear Me", 6: "The One With The Nineties",
      7: "Growing Pains", 8: "The People V. Killer Frost", 9: "Timeless",
      10: "Family Matters, Part 1", 11: "Family Matters, Part 2", 12: "Good-Bye Vibrations",
      13: "Masquerade", 14: "Rayo de Luz", 15: "Enemy at the Gates", 16: "P.O.W.",
      17: "Heart of the Matter, Part 1", 18: "Heart of the Matter, Part 2"
    },
    8: {
      1: "Armageddon, Part 1", 2: "Armageddon, Part 2", 3: "Armageddon, Part 3",
      4: "Armageddon, Part 4", 5: "Armageddon, Part 5", 6: "Impulsive Excessive Disorder",
      7: "Lockdown", 8: "The Fire Next Time", 9: "Phantoms", 10: "Reckless",
      11: "Resurrection", 12: "Death Rises", 13: "Death Falls", 14: "Funeral for a Friend",
      15: "Into the Still Force", 16: "The Curious Case of Bartholomew Allen", 17: "Keep It Dark",
      18: "The Man in the Yellow Tie", 19: "Negative, Part One", 20: "Negative, Part Two"
    },
    9: {
      1: "Wednesday Ever After", 2: "Hear No Evil", 3: "Rogues of War",
      4: "The Mask of the Red Death, Part 1", 5: "The Mask of the Red Death, Part 2",
      6: "The Good, the Bad and the Lucky", 7: "Wildest Dreams", 8: "Partners in Time",
      9: "It's My Party and I'll Die If I Want To", 10: "A New World, Part One",
      11: "A New World, Part Two", 12: "A New World, Part Three", 13: "A New World, Part Four"
    }
  };

  async function searchResults(query) {
    return [FLASH_METADATA];
  }

  async function extractDetails(urlOrId) {
    return FLASH_METADATA;
  }

  async function extractEpisodes(seriesId) {
    const episodes = [];

    // Loop through our hardcoded database to instantly generate every episode
    for (let seasonNum = 1; seasonNum <= 9; seasonNum++) {
      const seasonEps = EPISODES_DB[seasonNum];
      const totalEpisodes = Object.keys(seasonEps).length;

      for (let epNum = 1; epNum <= totalEpisodes; epNum++) {
        const episodeTitle = seasonEps[epNum];
        
        episodes.push({
          id: `${seasonNum}x${epNum}`,
          episode: epNum,
          number: epNum,
          season: seasonNum,
          href: `tv/${FLASH_TMDB_ID}/${seasonNum}/${epNum}`,
          url: `tv/${FLASH_TMDB_ID}/${seasonNum}/${epNum}`,
          title: episodeTitle, // Removed the parentheses
          
          // Anti-filter flags (prevents the app from hiding them)
          isDub: true,
          isSub: true,
          hasDub: true,
          hasSub: true,
          dubAvailable: true,
          subAvailable: true,
          type: "both"
        });
      }
    }
    return episodes;
  }

  async function extractStreamUrl(episodeHref, lang) {
    const match = String(episodeHref || '').match(/(?:60735|The-Flash|flash)[^\d]*(\d+)[^\d]+(\d+)/i) ||
                  String(episodeHref || '').match(/tv\/\d+\/(\d+)\/(\d+)/);

    if (!match) return { streams: [], subtitles: [] };

    const season = Number(match[1]);
    const episode = Number(match[2]);
    const seasonEpisodes = EPISODES_DB[season];
    if (!seasonEpisodes || !seasonEpisodes[episode]) {
      return { streams: [], subtitles: [] };
    }

    const streamUrl = `${STREAM_BASE_URL}/The-Flash---Season-${season}Ep${episode}.m3u8`;
    return {
      streams: ['Direct HLS', streamUrl],
      subtitles: []
    };
  }

  async function discoveryHome() {
    return {
      sections: [{
        id: 'flash_spotlight',
        title: 'Featured Show',
        style: 'hero',
        items: [FLASH_METADATA]
      }]
    };
  }

  async function discoveryFeed() {
    return { items: [], page: 1, hasMore: false };
  }

  globalThis.searchResults = searchResults;
  globalThis.extractDetails = extractDetails;
  globalThis.extractEpisodes = extractEpisodes;
  globalThis.extractStreamUrl = extractStreamUrl;
  globalThis.discoveryHome = discoveryHome;
  globalThis.discoveryFeed = discoveryFeed;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { searchResults, extractDetails, extractEpisodes, extractStreamUrl, discoveryHome, discoveryFeed };
  }
})();
