export type Level = {
  charIndices: number[]
  width: number
  height: number
  hash: string
  solved: { [char: number]: string }
}

export const levels: Level[] = [
  {
    solved: { 4: "s", 8: "l" },
    charIndices: [
      0,
      4,
      8,
      9,
      10,
      1,
      0,
      5,
      8,
      5,
      9,
      4,
      5,
      7,
      3,
      2,
      5,
      6,
      2,
      9,
      9,
      4,
      0,
      9,
      2
    ],
    width: 5,
    height: 5,
    hash: "0fdf3218bd86f02c5a4a74f2033ff957a5ed4eb3ecd5dfaa0360f5e890aaa639"
  },
  {
    solved: { 10: "y", 0: "s", 7: "ä", 6: "u" },
    charIndices: [
      9,
      3,
      1,
      1,
      8,
      11,
      4,
      11,
      6,
      0,
      5,
      7,
      9,
      0,
      10,
      9,
      7,
      0,
      9,
      10,
      3,
      2,
      6,
      6,
      0
    ],
    width: 5,
    height: 5,
    hash: "221c44101b6a10bc54abe0557932f9afb5af3edd988af7876d6aa6137ca971b0"
  },
  {
    solved: { 7: "i", 6: "ä" },
    charIndices: [
      1,
      9,
      10,
      2,
      7,
      9,
      10,
      7,
      9,
      0,
      7,
      2,
      7,
      11,
      6,
      10,
      8,
      4,
      2,
      6,
      5,
      4,
      3,
      7,
      11
    ],
    width: 5,
    height: 5,
    hash: "2afe7b939caf9e24fbd73ed05396304ea2a3e9bc9596da9e30c17a284ffe9e48"
  },
  {
    charIndices: [3, 4, 3, 6, 6, 0, 7, 3, 3, 4, 2, 6, 5, 2, 6, 1],
    width: 4,
    height: 4,
    hash: "014b21744057a5f4a934518387b2031053b87386e00c72448ac61f1e82c19f5d",
    solved: {
      "0": "e",
      "1": "i",
      "6": "t"
    }
  },
  {
    charIndices: [0, 2, 3, 5, 5, 8, 5, 0, 1, 2, 6, 4, 7, 3, 2, 5],
    width: 4,
    height: 4,
    hash: "524b4749c2c6c082092bb02632412e5e0598e7a387bc1a27cec313c8aec8345f",
    solved: {
      "2": "o",
      "5": "a"
    }
  },
  {
    charIndices: [
      0,
      2,
      5,
      2,
      0,
      2,
      7,
      6,
      10,
      1,
      8,
      4,
      10,
      10,
      6,
      2,
      9,
      3,
      2,
      0
    ],
    width: 5,
    height: 4,
    hash: "8eb6cb43b9ed51b881415ddf15962e0bece33e2ac305384148cd2f33214d2730",
    solved: {
      "2": "a",
      "3": "i",
      "4": "o"
    }
  },
  {
    charIndices: [1, 5, 7, 9, 0, 8, 4, 2, 2, 6, 4, 5, 2, 3, 2, 5, 6, 4, 0, 0],
    width: 5,
    height: 4,
    hash: "794a148830744c23976348b4b5362180143aa6890cb6096fc0371732885bf589",
    solved: {
      "0": "a",
      "1": "k",
      "2": "u"
    }
  },
  {
    charIndices: [
      2,
      6,
      4,
      1,
      7,
      10,
      0,
      6,
      7,
      9,
      3,
      9,
      5,
      4,
      9,
      6,
      8,
      11,
      11,
      8
    ],
    width: 5,
    height: 4,
    hash: "501cf0ef203325627ce301f78fd892d48449650dc732c17b0d01bc9d920d8edb",
    solved: {
      "0": "r",
      "5": "h",
      "6": "o",
      "11": "u"
    }
  },
  {
    charIndices: [
      0,
      4,
      8,
      3,
      6,
      3,
      0,
      2,
      1,
      2,
      6,
      5,
      7,
      8,
      3,
      9,
      4,
      8,
      2,
      6,
      2,
      9,
      5,
      6,
      5
    ],
    width: 5,
    height: 6,
    hash: "8eb46b916101bbeda89461777f2954b27b129de948e3352501a4dd390ae2ece4",
    solved: {
      "0": "p",
      "1": "n",
      "3": "i",
      "4": "u"
    }
  },
  {
    charIndices: [
      7,
      6,
      3,
      1,
      4,
      4,
      10,
      11,
      5,
      3,
      3,
      4,
      7,
      7,
      8,
      1,
      9,
      7,
      7,
      8,
      0,
      3,
      8,
      8,
      2
    ],
    width: 5,
    height: 6,
    hash: "845721610aa18862009d83cdaa1a053b27dab2adef0e2c714f09f39348709085",
    solved: {
      "2": "n",
      "3": "s",
      "4": "e",
      "9": "u",
      "10": "p"
    }
  },
  {
    charIndices: [
      8,
      7,
      6,
      4,
      1,
      0,
      10,
      5,
      9,
      8,
      6,
      0,
      11,
      6,
      11,
      6,
      2,
      4,
      4,
      11,
      2,
      8,
      0,
      11,
      3
    ],
    width: 5,
    height: 6,
    hash: "0f0ba9c0d0b3e2dff232b423bb2d0e57c4ea8a8be3caf5619c00134d9389feb8",
    solved: {
      "3": "n",
      "4": "k",
      "6": "l",
      "8": "s",
      "10": "p"
    }
  }
]
