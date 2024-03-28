// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCqcXlTU5A91zo5_cyPk-YBN7LEnzCGCKs",
    authDomain: "form-e903a.firebaseapp.com",
    projectId: "form-e903a",
    storageBucket: "form-e903a.appspot.com",
    messagingSenderId: "711136941489",
    appId: "1:711136941489:web:d259c09f8154d135a59990"
  };
  

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const nickname = document.getElementById('nickname').value;
    const address = document.getElementById('address').value;
    const college = document.getElementById('college').value;
    const university = document.getElementById('university').value;
    const phone = document.getElementById('phone').value;
    const gmail = document.getElementById('gmail').value;
    const duration = document.getElementById('duration').value;
    const gender = document.getElementById('gender').value;
    const fb = document.getElementById('fb').value;
    db.collection('users').add({
        fullName: fullName,
        nickname: nickname,
        address: address,
        college: college,
        university: university,
        phone: phone,
        gender: gender,
        gmail: gmail,
        duration: duration,
        fb: fb
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('infoForm').reset();
        GetRegisteredUser();
        alert("Your data uploaded successfully!");
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});

document.getElementById('showTableBtn').addEventListener('click', GetRegisteredUser);

function GetRegisteredUser() {
    db.collection('users').get().then((querySnapshot) => {
        const dataTableBody = document.getElementById('dataTableBody');
        dataTableBody.innerHTML = '';
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><a href="${data.fb}">${data.fullName}</a></td>
                <td>${data.nickname}</td>
                <td><button class="btn btn-info" onclick="showMoreInfo('${doc.id}')">Show More</button></td>
            `;
            dataTableBody.appendChild(tr);
        });
        document.getElementById('collection-form').style.display = 'none';
        document.getElementById('data-table').style.display = 'block';
    });
}

function showMoreInfo(userId) {
    const userRef = db.collection('users').doc(userId);
    userRef.get().then((doc) => {
        if (doc.exists) {
            const data = doc.data();
            const userInfoTable = document.getElementById('userInfoTable');
            userInfoTable.innerHTML = `
                <tr>
                    <td>Name:</td>
                    <td>${data.fullName}</td>
                </tr>
                <tr>
                    <td>Nickname:</td>
                    <td>${data.nickname}</td>
                </tr>
                <tr>
                    <td>Address:</td>
                    <td>${data.address}</td>
                </tr>
                <tr>
                    <td>College:</td>
                    <td>${data.college}</td>
                </tr>
                <tr>
                    <td>University:</td>
                    <td>${data.university}</td>
                </tr>
                <tr>
                    <td>Duration:</td>
                    <td>${data.duration}</td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td>HIDDEN</td>
                </tr>
                <tr>
                    <td>Gmail:</td>
                    <td>HIDDEN</td>
                </tr>
                <tr>
                    <td>Gender:</td>
                    <td>HIDDEN</td>
                </tr>
            `;
            document.getElementById('data-table').style.display = 'none';
            document.getElementById('user-info-table').style.display = 'block';
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    document.getElementById('back-btn').addEventListener('click', function() {
        document.getElementById('data-table').style.display = 'block';
        document.getElementById('user-info-table').style.display = 'none';
    });
    
}
