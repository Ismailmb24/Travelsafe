
var $input=$('#m-input');    //message form control
var input=document.getElementById('m-input');
var $body=$('body');  //body
var submit=document.getElementById('m-button');
var $scroll=$('#s-down');

//event that when page load
$(document).ready(function(){
    $input.focus();
    submit.disabled=true;
    $scroll.hide();
});

$('#m-input').on('keyup',function(e){
    if(input.value.length > 0){
        submit.disabled=false;
    }else {
        submit.disabled=true;
    }
});

//function that write request in  the page
function writer(id, text){
    var i=0;
    var speed=5;

    var container= document.createElement('div');    //div that hold request
    container.id=id;
    container.className='request';

    var requestLogo= document.createElement('img');    //request imge
    requestLogo.id='RL-img';
    requestLogo.setAttribute('src','img/logo R.png');
    requestLogo.setAttribute('alt','request logo image');

    container.appendChild(requestLogo);

    var requestParagraph=document.createElement('p');    //paragraph inside div that hold request
    requestParagraph.id='R-paragraph';

    container.appendChild(requestParagraph);


    document.getElementById('request-wraper').appendChild(container);    //appending requesst div inside request wraper div
  
            requestParagraph.innerHTML+=text;    //appending request text
          
}

var carShow=false;
var busShow=false;
var bicycleShow=false;
var boatShow=false;
var heliShow=false;
var jetShow=false;
var motorcShow=false;
var trainShow=false;
var RVShow=false;
var patt=/car/;

//event that fires when message send or submitted
$('form').on('submit', function(e){
    e.preventDefault();
    $('#wraper').remove();    //removing discription display first when page load

    var $iMessage=$('<div></div>');  //div that hold value inside message form control after sent
    $iMessage.attr('id','input-message');

    var $userImg=$('<img src="img/user 2.png" alt="user-image" id="user-img" />');   //message image
    $('#request-wraper').append($iMessage);

    $iMessage.html('<p id="i-m-p">'+$input.val()+'</p>');  //inserting message to the page
    $iMessage.prepend($userImg);
    
     if(carShow && $input.val()=='car'){

        writer('','sorry <b>'+$input.val()+'</b> already sent if you are not certisfied with the request, for more details. <p id="more-wraper"> <a target="_blank" href="https://www.google.com/search?q=how+to+travel+safely+on+car&client=firefox-b-d&sca_esv=582576413&sxsrf=AM9HkKk3KR3d-3gKNHhiEChMhVqDYLjJ_g%3A1700042948254&ei=xJhUZfyUD6OdhbIP79ekyAY&ved=0ahUKEwj8hqLA4cWCAxWjTkEAHe8rCWkQ4dUDCA8&oq=how+to+travel+safely+on+car&gs_lp=Egxnd3Mtd2l6LXNlcnAiG2hvdyB0byB0cmF2ZWwgc2FmZWx5IG9uIGNhcjIEEAAYRzIEEAAYRzIEEAAYRzIEEAAYRzIEEAAYRzIEEAAYRzIEEAAYRzIEEAAYR0jUEVAAWABwAHgCkAEAmAEAoAEAqgEAuAEMyAEA4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp" class="more-link">google it</a> <a href="#" class="more-link">be safe site</a></p> ');
        $input.val('');    //clearing text inside message form control after form submitted
        return;

    } else if(input.value=='car') {
        var car="When traveling by car, it's important to prioritize safety to ensure a smooth and secure journey. Here are some tips to help you stay safe while traveling in a car<br/>";

        car+="1. Buckle Up: Always wear your seatbelt, and ensure that all passengers are properly restrained with seatbelts or appropriate child safety seats. Seatbelts significantly reduce the risk of injury in the event of a collision.<br/>";
        
        car+="2. Follow Traffic Laws: Obey all traffic rules and regulations, including speed limits, traffic signals, and road signs. Adhering to traffic laws helps prevent accidents and keeps everyone on the road safe.<br/>";
        
        car+="3. Maintain a Safe Distance: Keep a safe following distance between your vehicle and the one ahead. This provides you with enough time to react and stop if necessary. The general rule of thumb is to maintain a minimum of a 3-second gap.<br/>";
        
        car+="4. Avoid Distractions: Stay focused on the road and avoid distractions while driving. Put away your mobile phone, don't eat or drink excessively, and avoid multitasking. Distracted driving can significantly increase the risk of accidents.<br/>";
        
        car+="5. Don't Drink and Drive: Never drive under the influence of alcohol or drugs. It impairs your judgment, reflexes, and coordination, making driving unsafe. If you plan to drink, arrange for a designated driver or use alternative transportation.<br/>";
        
        car+="6. Take Breaks: On long journeys, take regular breaks to combat fatigue. Pull over at rest areas or gas stations to stretch, walk around, and refresh yourself. Fatigue can impair your driving ability, so it's essential to stay alert.<br/>";
        
        car+="7. Plan Your Route: Familiarize yourself with the route before you start driving. Use navigation systems or maps to avoid getting lost and making sudden maneuvers. Sudden lane changes or turns can increase the risk of accidents.<br/>";
        
        car+="8. Check Your Vehicle: Before embarking on a trip, ensure your vehicle is in good working condition. Check the tires, brakes, lights, windshield wipers, and fluid levels. Regular maintenance reduces the chances of mechanical failures on the road.<br/>";
        
        car+="9. Be Prepared: Carry a basic emergency kit in your car, including a spare tire, jack, jumper cables, flashlight, first aid kit, and emergency contact numbers. Also, make sure your cell phone is charged and easily accessible.<br/>";
        
        car+="10. Stay Calm: Maintain a calm and patient demeanor while driving. Road rage and aggressive driving can escalate situations and endanger everyone on the road. Stay courteous and yield the right of way when necessary.<br/>";
        
        car+="Remember, defensive driving and cautious behavior go a long way in ensuring your safety on the road. It's better to arrive safely at your destination than to rush and risk accidents or injuries.<br/>";
        
        writer('car',car );
        carShow=true;

    } else if(busShow && $input.val()=='bus'){

        writer('','sorry <b>'+$input.val()+'</b> already sent if you are not certisfied with the request, for more details. <p id="more-wraper"> <a target="_blank" href="https://www.google.com/search?q=how+to+travel+safely+on+bus&client=firefox-b-d&sca_esv=582576413&sxsrf=AM9HkKk4ikmfwtA_5NiW4CMc_emnQbVj8A%3A1700042979620&ei=45hUZZjDJbGihbIP1deT0Ao&ved=0ahUKEwjYwJzP4cWCAxUxUUEAHdXrBKoQ4dUDCA8&uact=5&oq=how+to+travel+safely+on+bus&gs_lp=Egxnd3Mtd2l6LXNlcnAiG2hvdyB0byB0cmF2ZWwgc2FmZWx5IG9uIGJ1czIFECEYoAEyBRAhGKABMggQIRgWGB4YHTIIECEYFhgeGB0yCBAhGBYYHhgdMggQIRgWGB4YHTIIECEYFhgeGB0yCBAhGBYYHhgdMggQIRgWGB4YHTIIECEYFhgeGB1IjSVQmgZYphZwAXgBkAEAmAGnCqAB0iOqAQszLTEuMS4xLjEuMrgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgQQIxgnwgIGEAAYFhgewgIIEAAYigUYhgPiAwQYACBBiAYBkAYI&sclient=gws-wiz-serp" class="more-link">google it</a> <a href="#" class="more-link">be safe site</a></p> ');
        $input.val('');    //clearing text inside message form control after form submitted
        return;

    } else if($input.val()=='bus'){
     
        var bus="Traveling on buses can be a convenient and relatively safe mode of transportation. However, it's still important to prioritize safety to ensure a secure journey. Here are some tips to help you stay safe when traveling on buses:<br/>";

        bus+="1. Choose Reputable and Licensed Bus Services: Opt for well-established and licensed bus companies with good safety records. Research the reputation and safety ratings of the bus service before booking your trip.<br/>";
        
        bus+="2. Follow Onboard Instructions: Pay attention to and follow the instructions given by the bus driver or attendants. They are responsible for your safety and will provide guidance in case of any emergency or unexpected situations.<br/>";
        
        bus+="3. Use Seatbelts, if Available: If the bus is equipped with seatbelts, ensure that you and your fellow passengers buckle up. Seatbelts provide an added layer of protection in the event of a sudden stop or collision.<br/>";
        
        bus+="4. Hold onto Handrails: When standing or moving around the bus, hold onto the handrails or grab bars to maintain balance and prevent falls. Be mindful of sudden stops, starts, or turns.<br/>";
        
        bus+="5. Avoid Distracted Behavior: Stay alert and avoid engaging in activities that can distract you or the bus driver. Avoid using your mobile phone excessively, listening to loud music, or engaging in other behaviors that may divert your attention from your surroundings.<br/>";
        
        bus+="6. Be Mindful of Exiting and Boarding: When getting on or off the bus, be cautious of traffic and follow the designated procedures. Wait for the bus to come to a complete stop before exiting or boarding, and use designated crosswalks or pedestrian areas.<br/>";
        
        bus+="7. Secure Your Belongings: Keep your personal belongings secure at all times. Store them in the overhead compartments or under your seat. Be cautious of pickpockets or theft, especially in crowded buses or during stops.<br/>";
        
        bus+="8. Report Suspicious Activity: If you notice any suspicious behavior or see something unusual on the bus, notify the bus driver or contact the appropriate authorities. It's essential to maintain a safe and secure environment for all passengers.<br/>";
        
        bus+="9. Be Aware of Emergency Exits: Familiarize yourself with the location of emergency exits on the bus. In case of an emergency, follow the instructions provided by the bus driver or attendants and evacuate the bus calmly and quickly.<br/>";
        
        bus+="10. Be Patient and Respectful: Maintain a calm and patient demeanor while on the bus. Treat the bus driver, attendants, and fellow passengers with respect. Avoid confrontations or disruptive behavior that may compromise the safety and comfort of everyone onboard.<br/>";
        
        bus+="By following these safety tips and remaining aware of your surroundings, you can enhance your safety and have a pleasant journey when traveling on buses.<br/>";

        writer('bus',bus);
        busShow=true;

    } else if(bicycleShow && $input.val()=='bicycle'){

        writer('','sorry <b>'+$input.val()+'</b> already sent if you are not certisfied with the request, for more details. <p id="more-wraper"> <a target="_blank" href="https://www.google.com/search?q=how+to+travel+safely+on+bicycle&client=firefox-b-d&sca_esv=582576413&sxsrf=AM9HkKn4_wa543B6Vw40YISuOu2ZAABECg%3A1700043020733&ei=DJlUZeytLI2DhbIPmty62A0&ved=0ahUKEwjs4-ni4cWCAxWNQUEAHRquDtsQ4dUDCA8&uact=5&oq=how+to+travel+safely+on+bicycle&gs_lp=Egxnd3Mtd2l6LXNlcnAiH2hvdyB0byB0cmF2ZWwgc2FmZWx5IG9uIGJpY3ljbGUyBBAAGEcyBBAAGEcyBBAAGEcyBBAAGEcyBBAAGEcyBBAAGEcyBBAAGEcyBBAAGEdIxUxQhxtY3UBwAHgCkAEAmAEAoAEAqgEAuAEDyAEA-AEB4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp" class="more-link">google it</a> <a href="#" class="more-link">be safe site</a></p> ');
        $input.val('');    //clearing text inside message form control after form submitted
        return;

    } else if($input.val()=='bicycle'){
        
       var bicycle="When traveling on a bicycle, safety should be a top priority to ensure a secure and enjoyable ride. Here are some tips to help you stay safe when traveling on a bicycle:<br/>";

       bicycle+="1. Wear a Helmet: Always wear a properly fitting helmet to protect your head in case of a fall or collision. Make sure the helmet meets safety standards and is securely fastened.<br/>";
       
       bicycle+="2. Follow Traffic Rules: Obey all traffic laws, signals, and signs, just like you would when driving a car. Ride in the same direction as traffic, use hand signals to indicate turns, and stop at red lights and stop signs.<br/>";
       
       bicycle+="3. Be Visible: Make yourself visible to motorists and pedestrians by wearing bright and reflective clothing, especially in low-light conditions. Use front and rear lights on your bicycle, even during the day, to enhance visibility.<br/>";
       
       bicycle+="4. Ride Predictably: Maintain a consistent and predictable riding pattern. Signal your intentions clearly, check your surroundings before changing lanes or making turns, and avoid sudden maneuvers that can surprise other road users.<br/>";
       
       bicycle+="5. Be Aware of Your Surroundings: Stay alert and aware of the traffic and road conditions around you. Continuously scan the road for potential hazards, including parked cars, pedestrians, and other cyclists or vehicles.<br/>";
       
       bicycle+="6. Use Bike Lanes or Designated Paths: Whenever available, use designated bike lanes or paths that separate cyclists from motor vehicle traffic. If there are no dedicated facilities, choose routes with lower traffic volume and slower speeds.<br/>";
       
       bicycle+="7. Maintain Your Bicycle: Regularly inspect your bicycle to ensure it is in good working condition. Check the brakes, tires, and gears before each ride. Keep your chain well-lubricated and make sure all parts are secure.<br/>";
       
       bicycle+="8. Avoid Distractions: Stay focused on the road and avoid distractions such as using your phone, listening to music with headphones, or engaging in any activities that divert your attention from the surroundings.<br/>"
       
       bicycle+="9. Be Prepared for Weather Conditions: Adjust your riding style and equipment according to weather conditions. Wear appropriate clothing for the weather, use fenders to protect against rain or mud, and have lights or reflective gear for riding in low visibility conditions.<br/>";
       
       bicycle+="10. Learn Basic Bike Handling Skills: Develop basic bike handling skills such as braking, turning, and maintaining balance. Practice these skills in a safe environment before venturing into more challenging riding conditions.<br/>";
       
       bicycle+="11. Lock Your Bicycle: When leaving your bicycle unattended, always lock it securely with a sturdy lock to deter theft. Lock the frame and both wheels to a fixed object or use a bike rack.<br/>";
       
       bicycle+="12. Ride Sober: Never ride a bicycle under the influence of alcohol, drugs, or any impairing substances. Riding requires coordination, judgment, and quick reflexes, which can be compromised by substance use.<br/>";
       
       bicycle+="By following these safety tips, you can greatly reduce the risk of accidents and enjoy your bicycle travel with peace of mind. Remember to stay vigilant, be respectful of other road users, and prioritize your safety at all times.<br/>";

        writer('bicycle',bicycle)
        bicycleShow=true;

    }else if(boatShow && $input.val()=='boat'){

        writer('','sorry <b>'+$input.val()+'</b> already sent if you are not certisfied with the request, for more details. <p id="more-wraper"> <a target="_blank" href="https://www.google.com/search?q=how+to+travel+safely+on+boat&client=firefox-b-d&sca_esv=582576413&sxsrf=AM9HkKm0Nqn3sUklUN7FgnIk4U_hoeRC1w%3A1700043261979&ei=_ZlUZYarO6GuhbIPjMOB-Aw&ved=0ahUKEwjGne7V4sWCAxUhV0EAHYxhAM8Q4dUDCA8&uact=5&oq=how+to+travel+safely+on+boat&gs_lp=Egxnd3Mtd2l6LXNlcnAiHGhvdyB0byB0cmF2ZWwgc2FmZWx5IG9uIGJvYXQyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsANIriRQ8AVYth1wAXgBkAEAmAEAoAEAqgEAuAEDyAEA-AEB4gMEGAAgQYgGAZAGBw&sclient=gws-wiz-serp&dlnr=1&sei=MZpUZdzDL4CehbIP8uS-0Ag" class="more-link">google it</a> <a href="#" class="more-link">be safe site</a></p> ');
        $input.val('');    //clearing text inside message form control after form submitted
        return;

    }else if($input.val()=='boat'){

        var boat="Traveling on boats and ships can be a unique and exciting experience, but it's crucial to prioritize safety to ensure a secure journey. Here are some tips to help you stay safe when traveling on a boat or ship:<br/>";

        boat+="1. Wear a Life Jacket: Always wear a properly fitting life jacket when on board, especially during times of potential risk, such as when the boat is moving or during rough waters. Ensure that the life jacket is in good condition and approved by relevant safety standards.<br/>";
        
        boat+="2. Follow Safety Briefings: Pay attention to safety briefings provided by the crew or staff before the journey begins. Familiarize yourself with the location of life jackets, emergency exits, and other safety equipment on board.<br/>"
        
        boat+="3. Listen to Crew Instructions: Follow instructions given by the boat or ship's crew members. They are trained in safety procedures and will provide guidance during emergencies or unexpected situations.<br/>";
        
        boat+="4. Be Aware of Motion Sickness: If you are prone to motion sickness, consider taking preventive measures such as medication, acupressure bands, or natural remedies recommended by medical professionals. Stay hydrated and avoid heavy or greasy meals before and during the journey.<br/>";
        
        boat+="5. Mind Your Steps: Be cautious when moving around the boat or ship, especially in areas where the floor may be wet or slippery. Hold onto handrails and avoid running or sudden movements to prevent falls.<br/>";
        
        boat+="6. Respect Barriers and Restricted Areas: Observe and respect any barriers or restricted areas on the boat or ship. These areas may be off-limits for safety reasons, so it's important to follow the instructions provided by the crew.<br/>";
        
        boat+="7. Be Mindful of the Weather: Pay attention to weather conditions and forecasts before embarking on your journey. Avoid traveling during severe weather conditions, storms, or rough seas. If conditions deteriorate during the journey, follow the instructions of the crew and take necessary precautions.<br/>";
        
        boat+="8. Secure Loose Items: Ensure that any personal belongings, equipment, or loose items are properly secured to prevent them from falling or causing hazards during the journey. Follow any guidelines or restrictions regarding the storage of items on board.<br/>";
        
        boat+="9. Stay Hydrated and Protect Yourself from the Sun: Drink plenty of water to stay hydrated, especially in warm weather. Apply sunscreen and wear protective clothing, a hat, and sunglasses to shield yourself from the sun's harmful rays.<br/>";
        
        boat+="10. Be Mindful of Sea Creatures and Wildlife: Respect marine life and wildlife when on board. Avoid feeding or disturbing sea creatures and follow guidelines for responsible interactions, such as whale-watching or dolphin-watching, if applicable.<br/>";
        
        boat+="11. Choose Reputable Operators: Select reputable boat or ship operators that have a good safety record and comply with relevant safety regulations. Research the company's reputation, safety measures, and customer reviews before booking your trip.<br/>";
        
        boat+="12. Know Your Emergency Procedures: Familiarize yourself with the emergency procedures and evacuation plans specific to the boat or ship you are traveling on. Be prepared to follow instructions and act calmly in case of an emergency.<br/>";
        
        boat+="By following these safety tips and adhering to the guidelines provided by the boat or ship's crew, you can enhance your safety and have a memorable and secure journey on the water.<br/>";

        writer('boat',boat)
        boatShow=true;

    }else if(heliShow && $input.val()=='helicopter'){

        writer('','sorry <b>'+$input.val()+'</b> already sent if you are not certisfied with the request, for more details. <p id="more-wraper"> <a target="_blank" href="https://www.google.com/search?q=how+to+travel+safely+on+helicopter&client=firefox-b-d&sca_esv=582576413&sxsrf=AM9HkKmBo1qTEg_nKuz2rwgDY5kKa9gmYg%3A1700043352868&ei=WJpUZenWNOi-hbIP2sOuwAU&oq=how+to+travel+safely+on+heli&gs_lp=Egxnd3Mtd2l6LXNlcnAiHGhvdyB0byB0cmF2ZWwgc2FmZWx5IG9uIGhlbGkqAggAMgUQIRigATIFECEYoAEyCBAhGBYYHhgdSMs7UJEGWP4hcAF4AZABAJgBxgygAfI0qgELNC0zLjAuMS4xLjK4AQHIAQD4AQHCAgoQABhHGNYEGLADwgIEECMYJ8ICBhAAGBYYHsICBBAhGBXCAgoQIRgWGB4YDxgd4gMEGAAgQYgGAZAGAg&sclient=gws-wiz-serp" class="more-link">google it</a> <a href="#" class="more-link">be safe site</a></p> ');
        $input.val('');    //clearing text inside message form control after form submitted
        return;

    } else if($input.val()=='helicopter'){

        var heli="Operating a helicopter safely requires specialized training and certification. However, if you are referring to being a passenger on a helicopter, here are some general tips to ensure a safe experience:<br/>";

        heli+="1. Choose a Reputable Operator: Select a reputable helicopter operator that adheres to safety regulations and has a good safety record. Research the company's reputation, certifications, and customer reviews before booking your helicopter flight.<br/>";
        
        heli+="2. Follow Pre-flight Instructions: Listen carefully to the pre-flight instructions provided by the pilot or ground crew. Pay attention to safety briefings, emergency procedures, and any specific guidelines for boarding and disembarking the helicopter.<br/>";
        
        heli+="3. Wear Appropriate Safety Equipment: Depending on the flight, you may be required to wear safety equipment such as a helmet, life vest, or harness. Follow the instructions provided by the crew and ensure that safety equipment is properly fitted and secured.<br/>";
        
        heli+="4. Secure Loose Items: Ensure that all personal belongings, including cameras, phones, and bags, are securely stowed or fastened to prevent them from becoming a hazard during the flight. Avoid bringing bulky or loose items that may interfere with your movements or the helicopter's controls.<br/>";
        
        heli+="5. Board and Disembark Safely: Follow the instructions of the pilot or ground crew when boarding and disembarking the helicopter. Be mindful of the rotor blades and any potential hazards in the vicinity.<br/>";
        
        heli+="6. Listen to the Pilot: Once aboard the helicopter, listen to and follow the pilot's instructions throughout the flight. Stay seated unless instructed otherwise and keep your seatbelt fastened securely.<br/>";
        
        heli+="7. Be Mindful of Weight and Balance: Helicopters have specific weight and balance limitations. Follow the crew's instructions regarding seating arrangements and weight distribution to maintain proper balance and stability.<br/>";
        
        heli+="8. Stay Clear of Rotor Blades: Never approach or touch the rotor blades unless directed by the pilot or ground crew. Keep a safe distance from the helicopter until instructed otherwise.<br/>";
        
        heli+="9. Follow Emergency Procedures: In the event of an emergency or abnormal situation, remain calm and follow the pilot's instructions. Familiarize yourself with emergency procedures before the flight, including the location and operation of emergency exits and safety equipment.<br/>";
        
        heli+="10. Respect Flight Restrictions: Helicopter flights may be subject to certain airspace restrictions and regulations. Follow the pilot's guidance and avoid interfering with restricted areas or other aircraft.<br/>";
        
        heli+="Remember, helicopter operations involve inherent risks, and safety is of utmost importance. Always follow the instructions provided by the pilot and crew, and adhere to any specific safety guidelines provided for your helicopter flight.<br/>";

         writer('heli',heli)
         heliShow=true;

    }else if(jetShow && $input.val()==('jet'||'aeroplane' || 'airplane' || 'private jet')){

        writer('','sorry <b>'+$input.val()+'</b> already sent if you are not certisfied with the request, for more details. <p id="more-wraper"> <a target="_blank" href="https://www.google.com/search?q=how+to+travel+safely+on+airplane&client=firefox-b-d&sca_esv=582576413&sxsrf=AM9HkKn5ghpr0L-kUaLdd5U09BQ0T0BUWw%3A1700043517493&ei=_ZpUZdjbHd-BhbIPhKyTqAU&ved=0ahUKEwiYztnP48WCAxXfQEEAHQTWBFUQ4dUDCA8&uact=5&oq=how+to+travel+safely+on+airplane&gs_lp=Egxnd3Mtd2l6LXNlcnAiIGhvdyB0byB0cmF2ZWwgc2FmZWx5IG9uIGFpcnBsYW5lMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHSJoQUPUIWPUIcAF4ApABAJgBAKABAKoBALgBA8gBAPgBAcICBxAjGLADGCfCAgoQABhHGNYEGLAD4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp" class="more-link">google it</a> <a href="#" class="more-link">be safe site</a></p> ');
        $input.val('');    //clearing text inside message form control after form submitted
        return;

    }else if($input.val()=='jet'||$input.val()=='aeroplane' || $input.val()=='airplane' || $input.val()=='private jet'){

        var jet="Traveling by airplane is generally considered a safe mode of transportation. However, it's still important to prioritize safety measures to ensure a smooth and secure journey. Here are some tips to help you stay safe when traveling on an airplane:<br/>";

        jet+="1. Follow Security Procedures: Adhere to all security procedures and guidelines at the airport. Arrive early to allow enough time for security checks, and follow instructions given by airport personnel. Pay attention to the prohibited items list and ensure you don't carry any restricted items in your carry-on or checked baggage.<br/>";
        
        jet+="2. Listen to Safety Briefings: Pay attention to the safety briefing provided by the flight attendants before takeoff. Familiarize yourself with the location of emergency exits, the use of safety equipment, and the brace position. Although incidents are rare, it's crucial to be prepared.<br/>";
        
        jet+="3.Fasten Your Seatbelt: Keep your seatbelt fastened whenever you are seated, even if the seatbelt sign is off. In case of turbulence or unexpected events, it helps to keep you securely in your seat and minimizes the risk of injury.<br/>";
        
        jet+="4. Store Carry-On Items Properly: Ensure that your carry-on luggage is stored securely in the overhead bin or under the seat in front of you. Avoid placing heavy or bulky items in overhead compartments to prevent them from falling during turbulence or sudden stops.<br/>";
        
        jet+="5. Follow Crew Instructions: Pay attention to and follow the instructions given by the flight crew. They are trained to handle emergencies and will provide guidance in case of any unexpected situations. Cooperate with the crew and follow their directions promptly.<br/>";
        
        jet+="6. Be Mindful of Electronic Devices: Follow the airline's guidelines regarding the use of electronic devices. Turn off electronic devices or switch them to airplane mode during takeoff and landing. Follow the crew's instructions regarding the use of devices during the flight.<br/>";
        
        jet+="7. Stay Hydrated: Drink plenty of water during the flight to stay hydrated, as the cabin air can be dry. Avoid excessive alcohol and caffeine consumption, as they can contribute to dehydration.<br/>";
        
        jet+="8. Move and Stretch: During long flights, try to move around and stretch periodically to prevent blood clots and muscle stiffness. Follow the exercises and suggestions provided in the in-flight magazines or by the crew to promote circulation.<br/>";
        
        jet+="9. Take Precautions Against Illness: To minimize the risk of contracting or spreading illnesses, practice good hygiene. Wash your hands regularly with soap and water or use hand sanitizer. Cover your mouth and nose with a tissue or your elbow when sneezing or coughing.<br/>";
        
        jet+="10. Choose Reputable Airlines: Consider flying with well-established and reputable airlines that have a strong safety record. Research airlines and read reviews to make informed decisions about the airlines you choose to fly with.<br/>";
        
        jet+="By following these safety tips and staying aware of your surroundings, you can enhance your safety and have a comfortable and secure journey when traveling by airplane.";

        writer('jet',jet);
        jetShow=true;

    }else if(motorcShow && $input.val()=='motorcycle'){

        writer('','sorry <b>'+$input.val()+'</b> already sent if you are not certisfied with the request, for more details. <p id="more-wraper"> <a target="_blank" href="https://www.google.com/search?q=how+to+travel+safely+on+motorcycle&client=firefox-b-d&sca_esv=582576413&sxsrf=AM9HkKn93uqMvz_IO2J7J4togLKdXm1PAQ%3A1700043523446&ei=A5tUZazvGpSthbIPhPCcIA&ved=0ahUKEwjs_MTS48WCAxWUVkEAHQQ4BwQQ4dUDCA8&uact=5&oq=how+to+travel+safely+on+motorcycle&gs_lp=Egxnd3Mtd2l6LXNlcnAiImhvdyB0byB0cmF2ZWwgc2FmZWx5IG9uIG1vdG9yY3ljbGUyBRAhGKABMgUQIRigATIIECEYFhgeGB1IjWVQ-gVYyVRwAngBkAEAmAHhA6ABtzSqAQgyLTMuMTMuM7gBA8gBAPgBAcICChAAGEcY1gQYsAPCAgQQIxgnwgIGEAAYFhgewgIIEAAYigUYhgPCAgcQIRigARgK4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp" class="more-link">google it</a> <a href="#" class="more-link">be safe site</a></p> ');
        $input.val('');    //clearing text inside message form control after form submitted
        return;

    }else if($input.val()=='motorcycle'){

        var motorcycle="Traveling on a motorcycle can be an exhilarating experience, but it's crucial to prioritize safety to protect yourself on the road. Here are some tips to help you stay safe when traveling on a motorcycle:<br/>";

        motorcycle+="1. Wear Protective Gear: Always wear appropriate protective gear, including a helmet, gloves, a jacket, long pants, and sturdy footwear. These items can help protect you in the event of a crash or fall and minimize the risk of severe injuries.<br/>";
        
        motorcycle+="2. Get Proper Training: Take a motorcycle safety course or training program to develop essential riding skills and learn about defensive riding techniques. Proper training will improve your ability to handle the motorcycle and make informed decisions on the road.<br/>";
        
        motorcycle+="3. Follow Traffic Laws: Obey all traffic laws, including speed limits, traffic signals, and road signs. Treat your motorcycle like any other vehicle and avoid reckless maneuvers or illegal actions that can put you and others at risk.<br/>";
        
        motorcycle+="4. Be Visible: Make yourself visible to other drivers by wearing bright or reflective clothing and keeping your motorcycle's lights on at all times. Position yourself in the lane where you are most visible to other motorists and use turn signals appropriately.<br/>";
        
        motorcycle+="5. Maintain Your Motorcycle: Regularly inspect your motorcycle to ensure it is in good working condition. Check the tires, brakes, lights, and fluid levels before each ride. Proper maintenance helps prevent mechanical failures that could lead to accidents.<br/>";
        
        motorcycle+="6. Ride Defensively: Always anticipate potential hazards and be prepared to react. Be cautious of blind spots, watch for turning vehicles, and maintain a safe following distance. Ride defensively, assuming that other drivers may not see you or may not yield right of way.<br/>";
        
        motorcycle+="7. Avoid Distractions: Stay focused on the road and avoid distractions while riding. Do not use your mobile phone, listen to headphones, or engage in any activities that may divert your attention from the task at hand.<br/>";
        
        motorcycle+="8. Be Mindful of Weather Conditions: Adjust your riding style according to weather conditions. Rain, wind, and slippery surfaces can affect traction and handling. Reduce your speed, increase following distance, and be extra cautious in adverse weather.<br/>";
        
        motorcycle+="9. Plan Your Route: Familiarize yourself with the route before setting off on a trip. Choose roads that are well-maintained and appropriate for motorcycles. Consider traffic conditions and potential hazards when planning your route.<br/>";
        
        motorcycle+="10. Ride Sober: Never operate a motorcycle under the influence of alcohol, drugs, or any impairing substances. Riding requires focus, coordination, and quick reactions, which can be severely impaired by substance use.<br/>";
        
        motorcycle+="Remember, riding a motorcycle requires heightened awareness and caution. By following these safety tips, you can minimize the risks and enjoy your motorcycle journey safely.<br/>";

        writer('motorcycle',motorcycle);
        motorcShow=true;

    }else if(trainShow && $input.val()=='train'){

        writer('','sorry <b>'+$input.val()+'</b> already sent if you are not certisfied with the request, for more details.<p id="more-wraper"> <a target="_blank" href="https://www.google.com/search?q=how+to+travel+safely+on+train&client=firefox-b-d&sca_esv=582576413&sxsrf=AM9HkKncxnqH9DgK6w14uHnG-LMbVLvPhg%3A1700043574828&ei=NptUZZaVMqKehbIPhpGigAE&ved=0ahUKEwiWiIXr48WCAxUiT0EAHYaICBAQ4dUDCA8&uact=5&oq=how+to+travel+safely+on+train&gs_lp=Egxnd3Mtd2l6LXNlcnAiHWhvdyB0byB0cmF2ZWwgc2FmZWx5IG9uIHRyYWluMgUQIRigATIFECEYoAEyCBAhGBYYHhgdMggQIRgWGB4YHTIIECEYFhgeGB0yCBAhGBYYHhgdMggQIRgWGB4YHTIIECEYFhgeGB0yCBAhGBYYHhgdMggQIRgWGB4YHUjPLVCLBViUI3ABeAGQAQCYAcIDoAHAKKoBCDItNC4xMC4xuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICBBAjGCfCAgYQABgWGB7CAggQABiKBRiGA8ICChAhGBYYHhgPGB3iAwQYACBBiAYBkAYI&sclient=gws-wiz-serp" class="more-link">google it</a> <a href="#" class="more-link">be safe site</a></p> ');
        $input.val('');    //clearing text inside message form control after form submitted
        return;

    }else if($input.val()=='train'){

        var train="Pay Attention to Station Announcements: Listen to announcements made at train stations regarding platform changes, boarding procedures, and any potential delays or disruptions.<br/>";

        train+="1. Mind the Gap: When boarding or exiting the train, be mindful of the gap between the platform and the train. Pay attention to any warnings or markings indicating the safe boarding area.<br/>";
        
        train+="2. Hold Handrails: When moving around inside the train, use handrails to maintain balance, especially during sudden stops or starts.<br/>";
        
        train+="3. Secure Your Belongings: Keep your personal belongings close to you and avoid leaving them unattended. Use zippers, locks, or straps on bags to deter potential theft.<br/>";
        
        train+="4. Choose Your Seat Wisely: If possible, select a seat near the aisle and avoid sitting in empty compartments. Aisle seats allow you to move more easily and access exits if needed.<br/>";
        
        train+="5. Be Cautious at Stops: If the train makes intermediate stops, avoid opening windows or doors unless permitted by train staff. Be cautious when the train is in motion and avoid leaning out of windows.<br/>";
        
        train+="6. Follow Onboard Instructions: Pay attention to instructions given by train staff, including safety procedures and emergency information.<br/>";
        
        train+="7. Emergency Exits and Equipment: Familiarize yourself with the location of emergency exits, emergency brakes, and other safety equipment on the train. In case of an emergency, follow the instructions provided by train staff.<br/>";
        
        train+="8. Don't Block Emergency Exits: Avoid obstructing emergency exits and pathways to ensure quick and safe evacuation if needed.<br/>";
        
        train+="9. Mind Children and Pets: If you're traveling with children or pets, keep a close eye on them and ensure they remain seated or safely secured during the journey.<br/>";
        
        train+="10. Report Suspicious Activity: If you notice any suspicious behavior or see something unusual on the train, notify train staff or law enforcement personnel.<br/>";
        
        train+="11. Stay Sober: Avoid excessive alcohol consumption when traveling on the train, as it can impair judgment and coordination.<br/>";
        
        train+="12. Keep Important Contacts Handy: Carry contact information for railway authorities or emergency services in case you need assistance during your journey.<br/>";
        
        train+="13. Mind the Closing Doors: When boarding or exiting the train, be aware of closing doors and ensure you board or alight before the doors close.<br/>";
        
        train+="By following these safety tips and being aware of your surroundings, you can have a safe and pleasant journey when traveling on a train. Enjoy the ride!";

        writer('train',train);
        trainShow=true;

    }else if(RVShow && $input.val()==('RV'||'recreational vehicles'|| 'motorhomes' || 'campervans' || 'coaches' || 'caravans' || 'popup campers' || 'truck campers')){

        writer('','sorry <b>'+$input.val()+'</b> already sent if you are not certisfied with the request, for more details. <p id="more-wraper"> <a target="_blank" href="https://www.google.com/search?q=how+to+travel+safely+on+recreational+vehicles&client=firefox-b-d&sca_esv=582576413&sxsrf=AM9HkKk3KmL4UJZF7DbEm4h0dFOtvXX7kQ%3A1700043614473&ei=XptUZZy9HJCdhbIPuZCLWA&ved=0ahUKEwic5Pj948WCAxWQTkEAHTnIAgsQ4dUDCA8&uact=5&oq=how+to+travel+safely+on+recreational+vehicles&gs_lp=Egxnd3Mtd2l6LXNlcnAiLWhvdyB0byB0cmF2ZWwgc2FmZWx5IG9uIHJlY3JlYXRpb25hbCB2ZWhpY2xlczIFECEYoAEyBRAhGKABSLqCAVDIBViudXABeAGQAQCYAfoGoAH8VqoBCjMtMTUuNy4yLjK4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIEECMYJ8ICBhAAGBYYHsICCBAAGIoFGIYDwgIEECEYFcICCBAhGBYYHhgdwgIKECEYFhgeGA8YHcICBxAhGKABGAriAwQYACBBiAYBkAYI&sclient=gws-wiz-serp" class="more-link">google it</a> <a href="#" class="more-link">be safe site</a></p> ');
        $input.val('');    //clearing text inside message form control after form submitted
        return;

    } else if($input.val()=='RV' || $input.val()=='recreational vehicles'|| $input.val()=='motorhomes' || $input.val()=='campervans' || $input.val()=='coaches' || $input.val()=='caravans' || $input.val()=='popup campers' || $input.val()=='truck campers'){
        var RV="Traveling in recreational vehicles (RVs) can be a fun and adventurous way to explore different destinations. To ensure a safe journey in an RV, consider the following tips:<br/>";

        RV+="1. Pre-Trip Inspection: Before setting off, conduct a thorough inspection of the RV. Check the tires for proper inflation and signs of wear, inspect the brakes, test all lights and signals, and ensure all mechanical and electrical systems are in working order.<br/>";
        
        RV+="2. Safe Driving Practices: Practice safe driving habits while operating the RV. Adjust your driving speed to match road and weather conditions, maintain a safe distance from other vehicles, and use your mirrors effectively. Be cautious while turning and braking, as RVs have different handling characteristics compared to regular vehicles.<br/>";
        
        RV+="3. Weight Distribution: Properly distribute the weight inside the RV to maintain stability and balance. Ensure that heavy items are secured and positioned low and centered to minimize the risk of tipping over or affecting the vehicle's handling.<br/>";
        
        RV+="4. Seat Belt Usage: Always wear your seat belt when the RV is in motion, and encourage all passengers to do the same. Make sure seat belts are properly adjusted and fastened securely.<br/>";
        
        RV+="5. Know the Height and Length of the RV: Be aware of the height and length of your RV to avoid collisions with low-clearance structures, overhanging branches, or other obstacles. Pay attention to signage indicating maximum height limits on roads and bridges.<br/>";
        
        RV+="6. Take Breaks and Rest: Long hours of driving can lead to fatigue. Take regular breaks to rest, stretch, and refresh. Share driving responsibilities with another licensed driver if possible.<br/>";
        
        RV+="7. RV-Specific Driving Skills: If you are new to driving an RV, consider taking a driving course or practicing in a controlled environment to become familiar with its size, turning radius, and handling characteristics.<br/>";
        
        RV+="8. RV Campground Safety: When staying at RV campgrounds, choose reputable and well-maintained locations. Be cautious of electrical and water connections, and follow campground rules and regulations. Secure your RV when leaving the site and be mindful of potential hazards such as uneven terrain or low-hanging branches.<br/>";
        
        RV+="9.Carbon Monoxide Safety: RVs may produce carbon monoxide (CO) gas, which is dangerous when inhaled. Make sure to have functioning CO detectors inside the RV, never run the generator or use fuel-burning appliances while sleeping, and keep the RV well-ventilated.<br/>";
        
        RV+="10. Propane Safety: If your RV has a propane system, ensure that it is properly installed, inspected, and maintained. Follow manufacturer guidelines for safe usage and storage of propane, and be vigilant for any signs of leaks.<br/>";
        
        RV+="11. Weather Preparedness: Stay informed about weather conditions along your route and at your destination. Be prepared for changes in weather and have appropriate supplies, such as emergency kits, extra food, water, and warm clothing, in case of unexpected situations.<br/>";
        
        RV+="12. Plan Your Route: Plan your travel route in advance, considering road conditions, traffic, and any RV-specific restrictions or limitations. Stay updated with real-time traffic information and have alternate routes if necessary.<br/>";
        
        RV+="By following these safety tips and practicing responsible RV usage, you can enjoy a safe and enjoyable journey in your recreational vehicle. Remember to prioritize safety at all times and stay informed about best practices for RV travel."

       writer('RV',RV);
       RVShow=true;

    } else{
        writer('appol','I appologise <b>'+$input.val()+'</b> does not exist in vehicle used for travelling that this programe covers.');
        $input.val('');
    }

    $input.val('');    //clearing text inside message form control after form submitted
    $input.focus();
    $scroll.show();

});

$('.example').on('click', function(e){
    e.preventDefault();
    $input.val(this.textContent.toLowerCase());
    $('form').submit();
});

