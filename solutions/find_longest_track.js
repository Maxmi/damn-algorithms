/*
Given an object of track names and durations, write a function that returns the track name with the longest duration.
 */

const album_track_durations = {
  "Sherane a.k.a. Master Splinter's Daughter": "4:34",
  "*****, Don't Kill My Vibe": "5:11",
  "Backseat Freestyle": "3:33",
  "The Art of Peer Pressure": "5:25",
  "Money Trees": "6:27",
  "Poetic Justice": "5:00",
  "good kid": "3:34",
  "m.A.A.d city": "5:50",
  "Swimming Pools (Drank) - Extended Version": "5:14",
  "Sing About Me, I'm Dying of Thirst": "12:04",
  "Real": "7:23",
  "Compton": "4:08"
};

/**
 * @return {string}
 */

const find_longest_track = () => {
  let curr_longest_duration = Number.MIN_SAFE_INTEGER;
  let curr_longest_track = null;

  for (let track in album_track_durations) {
    let curr_track_duration = convert_time_to_seconds(album_track_durations[track]);

    if (curr_track_duration > curr_longest_duration) {
      curr_longest_duration = curr_track_duration;
      curr_longest_track = track;
    }
  }
  return curr_longest_track;
};

const convert_time_to_seconds = string => {
  return string.split(':').reduce((min, sec) => {
    return (parseInt(min) * 60) + parseInt(sec);
  });
};

export default find_longest_track;
