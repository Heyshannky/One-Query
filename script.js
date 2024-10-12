const faqs = {
    "Who is eligible to purchase hard-copy notes?": "Users with an active video plan in DBMCI One can purchase the hardcopy notes.",
    "When will I get hard-copy Notes delivered?": "The notes will be dispatched in two sets. Set-1 which includes Anatomy, Anesthesia, Psychiatry, Radiology, Dermatology, Orthopedics, and Medicine will start dispatching in the first week of November. Set-2 which includes Surgery, Physiology, Biochemistry, Ophthalmology, Pathology, Microbiology, ENT, Pharmacology, Paediatrics, Forensic Medicine, Community Medicine & OBG will start dispatching in the first week of January.",
    "I'm an Essential plan user, do I need to buy Digital notes?": "No, with the Essential plan, you get access to digital notes through the DBMCI One Notes app as complimentary.",
    "I already have digital notes, do I need to buy hard-copy notes as well?": "No, purchasing hardcopy notes isn't necessary as digital notes contain the same content. However, if you prefer the tactile experience of paper, you can choose to purchase the hard-copy notes.",
    "Who can purchase Digital notes?": "Users with an active video plan in DBMCI One can purchase Digital notes as an add-on.",
    "How long can I access digital notes?": "You can access digital notes as long as you have an active plan. However, you'll still have access to content you've already viewed even after your plan has expired.",
    "Can I cancel my plan or get a refund once I purchase the plan?": "No, we have a no-cancellation/refund policy. However, as a free user, you can explore 10% of the free content in the app.",
    "I have subscribed to Essential Plan, how can I add Test Series and Qbank?": "You can purchase Test Series only or Test Series and Qbank as an add-on by the end of October. Stay tuned for more details.",
    "I can't find one shot revision videos in the dbmci app (recorded classes, not live). Is there any new one shot videos coming up? If not can u please upload the old videos please?": "At the moment, One Shot revision program is not available. If we launch in the future, we will keep you informed.",
    "Could you please clarify the timeline of the availability of the Notes and the download Option in the Dbmci one app?": "Thank you for reaching out to us. I am attaching the schedule for the soft copy notes, which includes details on when notes will be available. You can also visit our social media for updates.",
    "Some notes are available now. I have a query, whether this notes only under the video or will there be a feature in coming days with entire note of a subject arranged at a single place rather than pieces arranged under the video?": "Digital notes will be available by mid-November in the DBMCI One Notes app where you can annotate, highlight, and add external images, revolutionizing the experience of having your notes with you all the time.",
    "While accessing its showing am not a user. kindly rectify the issue asap.": "As we can see, the plan is already active on your DBMCI One account linked with Phone number '9048787484' and email id 'mahesh.kg012@gmail.com'. Please confirm once, have you logged in with the same details?",
    "Regarding change in Registered phone no. Old no. - 8669438568 New no. - 8669438569": "Thank you for reaching out to us. Unfortunately, once a phone number is registered, we do not have the option to change. And you can also log in with your email id. Could you please let us know why you wish to change the number? It will help us assist you further.",
    "It was advertised and I was assured that the notes will be editable in the app itself. I have just seen the notes and they don't seem editable at all and there is not much blank space to add any extra points also. Why was it advertised as editable notes?": "At the moment, we are uploading the soft copy notes in the DBMCI One app. Digital Notes will be available by mid-November where you can annotate, highlight, and add external images.",
    "Want to buy pathology course by Dr. Praveen Kr Gupta but there is no active plan showing not even any plan showing to buy.": "Individual subjects are not available to purchase."
};

// Function to handle query submission
document.getElementById('query-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const userQuery = document.getElementById('user-query').value;
    const responseContainer = document.getElementById('response');
    
    // Clear previous response
    responseContainer.style.display = 'none'; // Hide the response box initially
    
    if (faqs[userQuery]) {
        responseContainer.textContent = faqs[userQuery];
    } else {
        responseContainer.textContent = "Sorry, I don't have an answer for that query. Please check back later.";
    }
    
    responseContainer.style.display = 'block'; // Show the response box

    // Show the copy button
    const copyButton = document.getElementById('copy-button');
    copyButton.style.display = 'block'; 

    // Clear the input field
    document.getElementById('user-query').value = ''; // Clear the input field
});

// Copy response functionality
document.getElementById('copy-button').addEventListener('click', function() {
    const responseText = document.getElementById('response').textContent;
    navigator.clipboard.writeText(responseText).then(() => {
        alert('Response copied to clipboard!');
    });
});
