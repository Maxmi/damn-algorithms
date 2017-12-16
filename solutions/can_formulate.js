/*
Given an arbitrary target string and another string of lyrics, write a function that returns a boolean of whether or not the target string can be formulated from the lyrics.

Each letter in the lyrics string can only be used once in your target string.

Note: Assume both inputs will be valid strings.

Examples:

let target = 'Hack Reactor'
let good_kid_chorus = 'Mass hallucination baby Ill education baby Want to reconnect with your elations This is your station baby';
can_formulate(target, good_kid_chorus); => return false

let target = 'Kendrick Lamar';
let now_or_never_verse = 'Waking up in a dream Sleepwalking on another big stage You never heard peace til you hear people scream Your name in unison';
can_formulate(target, now_or_never_verse); => return true
*/

/**
 * @param {string} target
 * @param {string} lyrics
 * @return {boolean}
 */

const can_formulate = (target, lyrics) => {
  if (target.length > lyrics.length) {
    return false;
  }

  let target_lowercase = target.toLowerCase();
  let lyrics_lowercase = lyrics.toLowerCase();

  let possible_chars = {};

  for (let char of lyrics_lowercase) {
    possible_chars[char] = (possible_chars[char] || 0) + 1;
  }

  for (let char of target_lowercase) {
    possible_chars[char] = (possible_chars[char] || 0) - 1;
    if (possible_chars[char] === -1) {
      return false;
    }
  }

  return true;
};

export default can_formulate;
