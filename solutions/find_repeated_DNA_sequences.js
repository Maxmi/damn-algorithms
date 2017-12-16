/*
DNA is made up of four types of nucleotides: Adenine (A), Thymine (T), Cytosine (C), and Guanine (G). A strand of DNA is a sequence of characters that consist of these four letters such as 'ATTCGAC'.

According to Kendrick Lamar, his DNA includes LOYALTY, ROYALTY, POWER, POISON, PAIN, and JOY.

Given a DNA sequence, write a function that returns an array of all the 7-letter-long sequences that occur more than once.

Ex:
let sequence = 'LOYALTYPOWERPOISONPAINJOYROYALTYLOYALTYAMBITIONROYALTYFLOWPAINPOISONLOYALTYJOY';
find_repeated_dna_sequences(sequence) => return ["LOYALTY", "ROYALTY"]
*/

/**
 * @param  {string} sequence
 * @return {array}
 */

const find_repeated_dna_sequences = sequence => {
  let dna = new Set();
  let result = new Set();

  for (let i = 0; i < sequence.length - 6; i++) {
    let curr_seq = sequence.substr(i, 7);
    dna.has(curr_seq) ? result.add(curr_seq) : dna.add(curr_seq);
  }

  return Array.from(result);
};

export default find_repeated_dna_sequences;
