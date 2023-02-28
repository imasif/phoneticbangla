class PhoneTicBangla {
  constructor() {
    this.text = "";
    this.vowels = [
      "o",
      "a",
      "i",
      "I",
      "u",
      "U",
      "ri",
      "e",
      "Oi",
      "O",
      "Ou",
      " ",
      "⏎",
    ];

    this.constants = [
      "k",
      "kh",
      "g",
      "gh",
      "ng",
      "c",
      "ch",
      "j",
      "jh",
      "io",
      "T",
      "Th",
      "D",
      "Dh",
      "N",
      "t",
      "th",
      "d",
      "dh",
      "n",
      "p",
      "f",
      "b",
      "v",
      "m",
      "z",
      "r",
      "l",
      "sh",
      "Sh",
      "s",
      "y",
      "h",
      "R",
      "Rh",
    ];

    this.vowelSymbol = {
      o: "",
      a: "া",
      i: "ি",
      I: "ী",
      u: "ু",
      U: "ূ",
      ri: "ৃ",
      e: "ে",
      Oi: " ৈ",
      O: "ো",
      Ou: "ৌ",
      ",,": "◌্",
    };

    this.constantSymbol = {
      Y: "্য",
      Ya: "্যা",
      B: "্ব",
      R: "্র",
      L: "্ল",
      M: "্ম",
      rr: "র্",
    };
    this.letters = {
      o: "অ",
      a: "আ",
      i: "ই",
      I: "ঈ",
      u: "উ",
      U: "ঊ",
      ri: "ঋ",
      e: "এ",
      Oi: "ঐ",
      O: "ও",
      Ou: "ঔ",
      k: "ক",
      kh: "খ",
      g: "গ",
      gh: "ঘ",
      ng: "ঙ",
      c: "চ",
      ch: "ছ",
      j: "জ",
      jh: "ঝ",
      io: "ঞ",
      t: "ত",
      th: "থ",
      d: "দ",
      dh: "ধ",
      n: "ন",
      T: "ট",
      Th: "ঠ",
      D: "ড",
      Dh: "ঢ",
      N: "ণ",
      p: "প",
      f: "ফ",
      b: "ব",
      v: "ভ",
      m: "ম",
      z: "য",
      r: "র",
      l: "ল",
      sh: "শ",
      Sh: "ষ",
      s: "স",
      y: "য়",
      h: "হ",
      R: "ড়",
      Rh: "ঢ়",
      "k,,": "ক্",
      "kh,,": "খ্",
      "g,,": "গ্",
      "gh,,": "ঘ্",
      "ng,,": "ঙ্",
      "c,,": "চ্",
      "ch,,": "ছ্",
      "j,,": "জ্",
      "jh,,": "ঝ্",
      "T,,": "ট্",
      "Th,,": "ঠ্",
      "D,,": "ড্",
      "Dh,,": "ঢ্",
      "t,,": "ত্",
      "th,,": "থ্",
      "d,,": "দ্",
      "dh,,": "ধ্",
      "n,,": "ন্",
      "p,,": "প্",
      "f,,": "ফ্",
      "b,,": "ব্",
      "v,,": "ভ্",
      "m,,": "ম্",
      "r,,": "র্",
      "l,,": "ল্",
      "sh,,": "শ্",
      "s,,": "স্",
      "h,,": "হ্",
      "R,,": "ড়্",
      "Rh,,": "ঢ়্",
      ":": "ঃ",
      nG: "ং",
      "^": "ঁ",
      "t,": "ৎ",
    };

    this.punctuationMarks = {
      ",": ",",
      ";": ";",
      ".": "।",
      "!": "!",
      "?": "?",
      ":,": ":",
      _: "—",
      "-": "-",
      ":-": ":-",
      "'": "'",
      '"': '"',
      "(": "(",
      ")": ")",
      "{": "{",
      "}": "}",
      "[": "[",
      "]": "]",
      "√": "√",
      ">": ">",
      "<": "<",
      "=": "=",
      "...": "...",
      "/": "/",
    };

    this.numberAndOthers = {
      "\n": "<br/>",
      1: "১",
      2: "২",
      3: "৩",
      4: "৪",
      5: "৫",
      6: "৬",
      7: "৭",
      8: "৮",
      9: "৯",
      0: "০",
      "@": "@",
      "#": "#",
      "৳": "৳",
      "%": "%",
      "&": "&",
      "*": "*",
      "-": "-",
      "+": "+",
      "~": "~",
      "`": "`",
      "|": "|",
      "♪": "♪",
      π: "π",
      "÷": "÷",
      "×": "×",
      "£": "£",
      $: "$",
      "℅": "℅",
      "°": "°",
      "®‌": "®‌",
      "©": "©",
      "™": "™",
    };

    this.phoneTics = [
      "o",
      "a",
      "i",
      "I",
      "u",
      "U",
      "ri",
      "e",
      "Oi",
      "O",
      "Ou",
      "k",
      "kh",
      "g",
      "gh",
      "ng",
      "c",
      "ch",
      "j",
      "jh",
      "io",
      "T",
      "Th",
      "D",
      "Dh",
      "N",
      "t",
      "th",
      "d",
      "dh",
      "n",
      "p",
      "f",
      "b",
      "v",
      "m",
      "z",
      "r",
      "l",
      "sh",
      "Sh",
      "s",
      "y",
      "h",
      "R",
      "Rh",
      "Y",
      "Ya",
      "B",
      "L",
      "M",
      "rr",
      "k,,",
      "kh,,",
      "g,,",
      "gh,,",
      "ng,,",
      "c,,",
      "ch,,",
      "j,,",
      "jh,,",
      "T,,",
      "Th,,",
      "D,,",
      "Dh,,",
      "t,,",
      "th,,",
      "d,,",
      "dh,,",
      "n,,",
      "p,,",
      "f,,",
      "b,,",
      "v,,",
      "m,,",
      "r,,",
      "l,,",
      "sh,,",
      "s,,",
      "h,,",
      "R,,",
      "Rh,,",
      " ",
      "\n",
      ",",
      ";",
      ".",
      "!",
      "?",
      ":",
      "_",
      ":-",
      "'",
      '"',
      "(",
      ")",
      "{",
      "}",
      "[",
      "]",
      "√",
      ">",
      "<",
      "=",
      "...",
      "/",
      ":",
      "nG",
      "^",
      "t,",
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      0,
      "@",
      "#",
      "৳",
      "%",
      "&",
      "*",
      "-",
      "+",
      "~",
      "`",
      "|",
      "♪",
      "π",
      "÷",
      "×",
      "£",
      "$",
      "℅",
      "°",
      "®‌",
      "©",
      "™",
    ];
  }

  findAllMatchingSubstrings(text) {
    const matchingSubstrings = [];

    // Sort the this.phoneTics by length in descending order
    this.phoneTics.sort((a, b) => b.length - a.length);

    // Loop through each substring in the this.phoneTics
    for (let i = 0; i < this.phoneTics.length; i++) {
      const substring = this.phoneTics[i];
      // Find all occurrences of the substring in the text using a sliding window
      let index = text.indexOf(substring);
      while (index !== -1) {
        // Check if the substring is already part of a longer match
        const isSubstrPartOfLongerMatch = matchingSubstrings.some((match) => {
          return (
            index >= match.index && index < match.index + match.substring.length
          );
        });
        // Add an object to the matchingSubstrings this.phoneTics if it's not part of a longer match
        if (!isSubstrPartOfLongerMatch) {
          matchingSubstrings.push({
            index,
            substring,
          });
        }
        // Move the window one character to the right and search for the substring again
        index = text.indexOf(substring, index + 1);
      }
    }

    // Sort the matchingSubstrings this.phoneTics by index in ascending order
    matchingSubstrings.sort((a, b) => a.index - b.index);

    return matchingSubstrings;
  }

  transpile(text) {
    this.text = text;

    this.matchingSubstrings = this.findAllMatchingSubstrings(this.text);

    let transpiledText = "";

    let tempArray = this.matchingSubstrings.map((item, i) => {
      // if found to use vowels
      if (this.vowels.indexOf(item.substring) >= 0) {
        let beforeItem = this.matchingSubstrings[i - 1];

        if (
          beforeItem != undefined &&
          this.constants.includes(beforeItem.substring)
        ) {
          // where to use vowelsymbol
          if (item.substring in this.vowelSymbol) {
            item.bangla = this.vowelSymbol[item.substring];
          }
        } else if (
          beforeItem != undefined &&
          beforeItem.substring in this.constantSymbol
        ) {
          item.bangla = this.vowelSymbol[item.substring];
        } else {
          item.bangla = this.letters[item.substring];
        }
      }

      //if punctuations
      else if (item.substring in this.punctuationMarks) {
        item.bangla = this.punctuationMarks[item.substring];
      }
      //numbers and others
      else if (item.substring in this.numberAndOthers) {
        item.bangla = this.numberAndOthers[item.substring];
      }
      //constant or constant symbol
      else {
        if (item.substring in this.constantSymbol) {
          item.bangla = this.constantSymbol[item.substring];
        } else {
          item.bangla = this.letters[item.substring];
        }
      }

      return item;
    });

    for (let i = 0; i < this.text.length; i++) {
      tempArray.find((item, ind) => {
        if (i == item.index) {
          if (item.bangla !== undefined) {
            transpiledText += item.bangla;
          } else {
            transpiledText += " ";
          }
        }
      });
    }

    return transpiledText;
  }
}

export default PhoneTicBangla;
