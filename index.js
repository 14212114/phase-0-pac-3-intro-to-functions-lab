function shout(string) {
    return string.toUpperCase();
}
console.log(shout("hello"));

function whisper(string) {
    return string.toLowerCase();
}
console.log(whisper("hello"));

function logShout(string) {
    console.log(string.toUpperCase());
}
logShout("hello");

function logWhisper(string) {
    console.log(string.toLowerCase());
}
logWhisper("HELLO");

function sayHiToHeadphonedRoommate(string) {
    switch (true) {
      case string === string.toLowerCase():
        return "I can\'t hear you!";

      case string === string.toUpperCase():
        return "YES INDEED!";
        
      case string === "Let\'s have dinner together!":
        return "I would love to!";  
    }
  }
  console.log(sayHiToHeadphonedRoommate("hello"));
  console.log(sayHiToHeadphonedRoommate("HELLO"));
  console.log(sayHiToHeadphonedRoommate("Let\'s have dinner together!"));