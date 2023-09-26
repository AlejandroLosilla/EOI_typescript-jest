import { countChars } from "./adapters"
import { checkLimit } from './checkLimit'
// TODO Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner, you can assume that the input data is always a non empty string, no need to verify it.

// should return an object with the 'total' number ocurrences and the 'value' string;

// if there is more than 50 occurrences we should add new prop 'limit' to object with 'It has passed first limit' value

// if there is more than 100 occurrences we should add new prop 'limit' to object with 'It has passed second limit value

// if there is more than 150 occurrences we should add new prop 'limit' to object with 'It has passed third limit' value

// if there is more than 200 occurrences we should add new prop 'limit' to object with 'It has passed fourth limit' value

// if there is more than 250 occurrences we should add new prop 'limit' to object with 'It has passed the last limit' value and another prop 'invalid' with true value

export const enum Language {
  Spanish = 'es_ES',
  English = 'en_US'
}

type LanguageTag = 'es_ES' | 'en_US';

export const removeExclamations = (sentence: string, lang: LanguageTag) => {
  const opening = countChars('¡', sentence);
  const closing = countChars('!', sentence);
  const ocurrences = closing + opening;

  sentence = sentence.replace(/!|¡/g, '') + '!';
  if (lang === Language.Spanish) {
    sentence = '¡' + sentence;
  }

  const object = {
    total: ocurrences,
    value: sentence,
  }

  return {
    ...object,
    ...checkLimit(ocurrences)
  }
}