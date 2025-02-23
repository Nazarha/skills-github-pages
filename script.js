console.log("Website is up and running!");

function convertTextToSpeech() {
    // Get the text from the textarea
    var text = document.getElementById('textInput').value;

    // Check if the textarea is empty
    if (text === "") {
        alert("Please enter some text!");
        return;
    }

    // Create a new SpeechSynthesisUtterance object
    var utterance = new SpeechSynthesisUtterance(text);

    // Optionally, you can change the voice, rate, and pitch
    var voices = window.speechSynthesis.getVoices();
    utterance.voice = voices[0]; // You can change the voice index here for different voices
    utterance.rate = 1;  // Speed of speech (1 is normal speed)
    utterance.pitch = 1; // Pitch of speech (1 is normal pitch)

    // Speak the text
    window.speechSynthesis.speak(utterance);
}
