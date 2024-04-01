import{b as a,d as c,e as g}from"./assets/firebase-DrfsLvEe.js";const i=document.getElementById("userProfile");document.getElementById("backBtn");async function l(e){try{const o=a(c,"users",e),d=await g(o);if(d.exists()){const t=d.data(),n=document.createElement("td"),r=document.createElement("a");r.textContent="ID LINK",r.href=`https://www.facebook.com/${t.fb}`,r.target="_blank",n.appendChild(r);const s=`
            <tr>
                <tr>
                    <td><strong>Name:</strong></td>
                    <td>${t.fullName}</td>
                </tr>

                <tr>
                    <td><strong>Nickname:</strong></td>
                    <td>${t.nickname}</td>
                </tr>

                <tr>
                    <td><strong>Batch:</strong></td>
                    <td>${t.batch===void 0?"Not Given":t.batch}</td>
                </tr>

                <tr>
                    <td><strong>Study Duration:</strong></td>
                    <td>${t.duration}</td>
                </tr>
                <tr>
                    <td><strong>Contact:</strong></td>
                    <td>HIDDEN</td>
                </tr>
                <tr>
                    <td><strong>Blood Group:</strong></td>
                    <td>${t.blood===void 0?"Not Given":t.blood}</td>
                </tr>

                <tr>
                    <td><strong>Address:</strong></td>
                    <td>${t.address}</td>
                </tr>
                <tr>
                    <td><strong>College:</strong></td>
                    <td>${t.college}</td>
                </tr>
                <tr>
                    <td><strong>University:</strong></td>
                    <td>${t.university}</td>
                </tr>
                <tr>
                    <td><strong>Gmail:</strong></td>
                    <td>${t.gmail}</td>
                </tr>
                <tr>
                    <td><strong>Facebook:</strong></td>
                    <td><a href="${t.fb}">ID LINK</a></td>
                </tr>
            </tr>
                <!-- Add more rows for additional user information -->
            `;i.innerHTML=s}else console.log("No such document!")}catch(o){console.error("Error fetching user data: ",o)}}const u=new URLSearchParams(window.location.search),m=u.get("userId");l(m);
