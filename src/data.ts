export const theKnock = {
  id: "root",
  title: "The Knock",
  text: "It is 2:47 AM. You are asleep when a single knock jolts you awake. Not frantic. Not repeated. Just one. Deliberate. You lie still, heart hammering, staring at the ceiling. The house is silent but something feels wrong — the kind of wrong your body knows before your mind catches up. The shadows in the corner of your room seem darker than usual. Your dog, who sleeps at the foot of your bed every night, is gone. The front door is down the hall. Fourteen steps. You have counted them before.",
  choices: [
    {
      id: "node-a",
      title: "The Hallway",
      label: "Get up and check the door",
      text: "You grab your phone — no signal. Not low signal. None. The hallway is dark except for a thin strip of pale light bleeding under the front door. The floorboards creak under your feet as you inch closer. Your breath fogs in the air — it was not this cold when you went to bed. Through the peephole you see a woman, soaked from rain, face down, hair plastered across her shoulders. She is trembling. One hand is pressed flat against your door as though holding herself up. The other is behind her back.",
      choices: [
        {
          id: "node-a1",
          title: "White Eyes",
          label: "Open the door",
          text: "The moment the door swings open she grabs your wrist with an iron grip — her fingers are ice cold. She looks up slowly. Her eyes are completely white. No iris. No pupil. Just white. She whispers, 'They followed me here. Lock the door. Now. Do not look behind me.' Behind her, at the very edge of the streetlight's reach, something stands perfectly still. Tall. Too tall. It has no face you can make out, only a shape — and the shape is watching. She tightens her grip on your wrist until it hurts.",
          choices: [
            {
              id: "node-a1a",
              title: "Darkness Inside",
              label: "Pull her in and lock the door",
              text: "You yank her inside and slam the door, throwing every bolt. She collapses against the wall, breathing in ragged bursts. For a long moment neither of you speaks. Then she says, barely above a whisper, 'You cannot turn on any lights. They see light the way sharks smell blood — from miles away.' A sound begins outside. Low. Rhythmic. Like slow breathing — pressed against every window at once, moving from one side of the house to the other. Then it stops. The silence that follows is worse.",
              choices: [
                {
                  id: "node-a1a1",
                  title: "I Am You",
                  label: "Ask her who they are",
                  text: "She rises from the floor slowly, deliberately, as though preparing herself for something. She crosses the room and grabs your face with both hands. Her white eyes search yours in the dark. 'I am you,' she whispers. 'From three days from now. I came back because we made the wrong choice and I needed you to make a different one.' Your legs go weak. 'What choice?' you ask. She opens her mouth to answer — and the breathing outside starts again. Closer. Right at the front door. Then the knock comes. From inside the house. From the top of the stairs.",
                  choices: [
                    {
                      id: "node-a1a1a",
                      title: "The Stairs",
                      label: "Go toward the knock",
                      text: "You climb the stairs one at a time, the woman close behind you. At the top, your bedroom door is closed. You never closed it. A thin line of light pulses underneath it — not electric light, something older, something amber and alive. You reach for the handle. The woman grabs your arm. 'Whatever you see in there,' she says, 'do not speak to it. It will use your voice against you.' You push the door open.",
                      choices: [
                        {
                          id: "node-a1a1a1",
                          title: "The Wrong Choice",
                          label: "Step inside the room",
                          text: "The room is empty except for a chair placed in the center that was not there before. On it sits your dog, completely still, staring at the wall. You call his name. He turns his head slowly — and his eyes are white. He opens his mouth and speaks in your voice: 'You should have listened to her three days ago.' The amber light dies. The room goes black. The woman behind you screams once — and then there is silence so complete it feels like the world has been switched off.",
                          choices: [],
                        },
                        {
                          id: "node-a1a1a2",
                          title: "Run",
                          label: "Shut the door and run back downstairs",
                          text: "You slam the door and bolt back down the stairs, the woman right behind you. 'The back door,' she says. 'Now.' You burst through it into the night air. Cold. Clear. The street behind the house is empty and quiet, normal, like nothing has happened. You both run until your lungs burn. Three blocks away you stop under a streetlight. She bends over, hands on knees, catching her breath. Then she straightens up and says, 'We have about six hours before it figures out where we went. So let me tell you everything.'",
                          choices: [],
                        },
                      ],
                    },
                    {
                      id: "node-a1a1b",
                      title: "Barricade",
                      label: "Barricade the stairs and wait until morning",
                      text: "You drag the sofa, the bookshelf, everything you can move, to the foot of the stairs and pile it high. Then you and the woman sit with your backs against the far wall in the dark, knees pulled up, listening. Hours pass. Nothing moves. Nothing knocks. At some point exhaustion pulls you under. When you wake, pale grey light is seeping through the curtains. Morning. The woman is gone. On the floor where she sat is a single photograph — a different one from any you own. It shows you and a child you do not recognise, standing outside a house you have never seen, both of you smiling. On the back, in your own handwriting, are the words: 'This is what we were protecting.'",
                      choices: [],
                    },
                  ],
                },
                {
                  id: "node-a1a2",
                  title: "Armed and Alone",
                  label: "Grab a weapon and guard the door",
                  text: "You feel your way to the kitchen and close your hand around the largest knife in the block. You plant yourself at the front door, back straight, listening. The breathing outside has stopped. Nothing moves for twenty minutes. Thirty. An hour. Your arms begin to ache. Then the woman's voice comes from behind you — from the living room — soft and almost apologetic. 'It is already inside. It has been since the moment you opened the door for me.' You spin around. She is standing in the centre of the room. But her shadow on the wall behind her is facing the wrong direction. 'I am sorry,' she says. 'I did not come alone.'",
                  choices: [
                    {
                      id: "node-a1a2a",
                      title: "Confront It",
                      label: "Demand to know what she brought in",
                      text: "You cross the room and press the knife flat between you both. 'What did you bring into my house?' She does not flinch. 'It has been following me for three days,' she says quietly. 'I thought if I got inside fast enough it would not make it through. I was wrong.' Her shadow peels away from the wall behind her. Slowly. Deliberately. It moves toward you across the floor even though nothing is casting it. It reaches your feet and stops. Then it begins to climb.",
                      choices: [],
                    },
                    {
                      id: "node-a1a2b",
                      title: "Back Door",
                      label: "Bolt for the back door",
                      text: "You run. Through the kitchen, hand on the back door latch, you throw it open and tumble into the cold night air. You do not stop running until you hit the end of the street. When you finally turn around, your house looks completely normal — lights off, quiet, ordinary. But the front door is open. And something is standing in it, backlit, watching you from across the street. It raises one hand slowly. Not a threat. A wave. Like it is saying goodbye.",
                      choices: [],
                    },
                  ],
                },
              ],
            },
            {
              id: "node-a1b",
              title: "Into the Dark",
              label: "Step outside toward the darkness",
              text: "You push past her and walk down the path toward the edge of the streetlight. The darkness beyond it is thick — almost solid, like a wall of black water. You stop at the boundary where the light dies. You reach your hand out slowly and it disappears into the dark up to the wrist. No pain. No cold. No sensation at all — just absence, like that part of your hand no longer exists. You stand there for a long moment. Then something on the other side closes around your fingers. Not grabbing. Holding. Gently. Like it has been waiting a long time.",
              choices: [
                {
                  id: "node-a1b1",
                  title: "Pull Back",
                  label: "Yank your hand back and run inside",
                  text: "You wrench your hand free and stumble backward into the light. Your hand is intact — but on your palm, in the center, is a mark you have never seen before. A symbol, dark as a bruise, already fading. The woman is gone from your doorstep. The front door is wide open. When you step back inside, every clock in your house reads 2:47. Every one of them. Even the ones that stopped working years ago.",
                  choices: [],
                },
                {
                  id: "node-a1b2",
                  title: "The Other Side",
                  label: "Step fully into the darkness",
                  text: "You take one more step and the light behind you vanishes entirely. The darkness is not empty — it hums, low and constant, like something enormous breathing. Your eyes adjust slowly. You are standing in your street, but wrong — the houses are the same but all their windows are dark, their gardens overgrown, their doors sealed with something black and tarlike. Everything is yours and not yours at the same time. A voice beside you says, 'You are the first one to step through willingly.' You turn. A child is standing next to you. Your face. Your eyes. Maybe eight years old. 'I have been waiting,' the child says. 'We have a lot to fix.'",
                  choices: [],
                },
              ],
            },
          ],
        },
        {
          id: "node-a2",
          title: "The Count",
          label: "Call out through the door without opening it",
          text: "'Who is there?' The words feel thin in the silence. No answer for a long moment. Then her voice comes through the wood — barely a breath, pressed right up against the other side of the door. 'You know who I am. You have always known. I need you to open this door before they finish counting.' A pause. Then, from somewhere that seems to come from inside your own chest rather than outside — one.",
          choices: [
            {
              id: "node-a2a",
              title: "The Photograph",
              label: "Open the door before the count ends",
              text: "You throw it open at two. The doorstep is empty. The street is empty. The rain has stopped and the air is perfectly still. At your feet, face down on the welcome mat, is a photograph. You pick it up and turn it over. It is a photograph of you — asleep in your bed — taken from the corner of your bedroom, tonight. In the background of the photo, barely visible in the shadows of the corner, something is standing and watching you sleep. You look at the corner of the photograph more closely. It is smiling.",
              choices: [
                {
                  id: "node-a2a1",
                  title: "The Corner",
                  label: "Go check the corner of your bedroom",
                  text: "You climb the stairs with your phone torch on, hand shaking. You push your bedroom door open slowly. The room looks exactly as you left it. You scan the corner where the thing was standing in the photograph. Nothing. Just the wall. You step closer, torch raised — and notice the wallpaper in that corner is slightly darker than the rest of the room. You press your hand flat against it. It is warm. And it moves, slowly, like something breathing on the other side.",
                  choices: [],
                },
                {
                  id: "node-a2a2",
                  title: "Leave",
                  label: "Grab your keys and get out of the house",
                  text: "You do not go back upstairs. You grab your keys from the hook by the door, step over the photograph, and walk to your car in bare feet. You drive for forty minutes without knowing where you are going. When you finally pull over on a country road and kill the engine, the silence is absolute and clean. You sit there until sunrise. When you get home the photograph is gone from the doorstep. But your bedroom window — on the second floor — is open. And the curtain is moving.",
                  choices: [],
                },
              ],
            },
            {
              id: "node-a2b",
              title: "Too Late",
              label: "Step back and let the count finish",
              text: "Three. The sound of it is not a word — it is a vibration, felt in your teeth and your sternum simultaneously. Then silence. Then the knock comes again — not from the front door. From your bedroom door. At the end of the hall. Behind you. Something reached three and came in through a different way entirely, and now it is standing on the other side of your bedroom door, knocking politely, as though it has all the time in the world.",
              choices: [
                {
                  id: "node-a2b1",
                  title: "Answer It",
                  label: "Walk to the bedroom door and open it",
                  text: "You walk the length of the hallway in slow motion, each step heavier than the last. You put your hand on the bedroom door handle. The knocking stops the instant you touch it. You push it open. The room is empty. Your bed is made — but you did not make it before you went to sleep. On the pillow, perfectly centered, is a key you have never seen before attached to a tag with an address written on it. An address in your city. An address that is not a house. It is a coordinates for the middle of the river.",
                  choices: [],
                },
                {
                  id: "node-a2b2",
                  title: "Escape",
                  label: "Run straight for the front door and leave",
                  text: "You spin around and run — front door, throw the bolts, burst outside into the cold air. The street is empty. You sprint to your neighbor's house and hammer on their door. Lights come on. They open up, half asleep, confused. You are babbling. They sit you down and make tea and listen. At some point you stop talking and realize — their eyes. Both of them. Completely white. They smile at exactly the same time. 'We have been wondering,' one of them says, 'when you would finally leave your house.'",
                  choices: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "node-b",
      title: "The Message",
      label: "Stay in bed and ignore it",
      text: "You pull the blanket up and squeeze your eyes shut. It was nothing. One knock could be anything — a pipe, the house settling, a dream. You breathe slowly and wait for your heart rate to drop. Silence stretches for five minutes. Then ten. You almost believe it is over. Then your phone lights up on the nightstand, screen blazing in the dark. Unknown number. You reach for it. The text reads: 'You should have opened the door. Now it is inside with you. Do not move.'",
      choices: [
        {
          id: "node-b1",
          title: "Who Is This",
          label: "Reply to the message",
          text: "Your thumbs type fast — 'Who is this? What is inside?' The message delivers instantly. You watch the screen. The typing indicator appears immediately — three dots, pulsing. Then the reply: 'Look under your bed. Slowly. Do not make a sound when you see it.' Before you can process that, your phone torch switches on by itself, pointing straight down at the gap between your mattress and the floor. You did not turn it on. Something wanted you to look.",
          choices: [
            {
              id: "node-b1a",
              title: "Under the Bed",
              label: "Look under the bed",
              text: "You lower yourself over the edge in agonizing slow motion, phone torch trembling. The darkness beneath the bed resolves — and two white eyes stare directly back at you from the far corner, perfectly still. A long silence. Then it speaks in your voice, your exact cadence and pitch: 'I knocked because I wanted to warn you. The one at the door — she is not what you think she is. She has been here before. She will come back. And every time she does, something stays behind.' The eyes blink once. 'This time it was me.'",
              choices: [
                {
                  id: "node-b1a1",
                  title: "Negotiate",
                  label: "Ask it what it wants",
                  text: "Your voice comes out barely a whisper. 'What do you want?' The thing under your bed is quiet for a long time. Then: 'I want you to remember me. That is all. When she comes back — and she will come back — I want you to know that whatever she tells you about who I am, she is lying.' It pauses. 'My name is the same as yours. We were the same person until three days ago.' The white eyes begin to dim. 'She is going to knock again tomorrow night. You need to be ready this time.'",
                  choices: [],
                },
                {
                  id: "node-b1a2",
                  title: "Flee",
                  label: "Scramble off the bed and run",
                  text: "You throw yourself off the mattress and sprint down the hallway, not looking back. Front door. You slam it open and run into the street in bare feet, gasping. The night air is cold and ordinary. Cars parked. Houses dark. A normal street at 3 AM. You stand there for a full minute catching your breath. Then your phone buzzes in your hand. The unknown number again. One message: 'It was not going to hurt you. It was the only thing in that house that was actually on your side. I hope you remember that.' Beneath it, a second message: 'I am coming back tomorrow.'",
                  choices: [],
                },
              ],
            },
            {
              id: "node-b1b",
              title: "The Sprint",
              label: "Run for the front door without looking under the bed",
              text: "You do not look. You roll off the far side of the bed, hit the floor running, and fly down the hallway. Front door — bolts off, handle down, you burst out into the cold night air and keep running. Two houses down you stop under a streetlight, doubled over, hands on knees. When you straighten up you realize someone is standing beside you. The woman from the doorstep — dry now, calm, composed, her eyes normal. Brown. Human. She hands you a folded piece of paper. 'I was hoping you would come out,' she says. 'I have been trying to warn you all week. Read that when you are ready. We do not have much time before it follows you out here.'",
              choices: [
                {
                  id: "node-b1b1",
                  title: "The Letter",
                  label: "Open the paper immediately",
                  text: "You unfold it under the streetlight. It is a letter in your own handwriting — but you did not write it. The date at the top is three days from now. It begins: 'If you are reading this before the fourth night, there is still time.' The next paragraph describes your house, your bedroom, the knock, the phone message — everything that just happened, written in the past tense, from the perspective of a future version of you who lived through all of it. The last line reads: 'Do not go back inside alone. She will go with you. Trust her. I did not, and I am writing this from somewhere I cannot come back from.'",
                  choices: [],
                },
                {
                  id: "node-b1b2",
                  title: "Demand Answers",
                  label:
                    "Ask her to explain everything before you read anything",
                  text: "'Start talking,' you say. 'Who are you, what is in my house, and why does any of this involve me?' She looks at you steadily. 'My name does not matter yet. What matters is that three days ago I made a choice in a house exactly like yours, on a night exactly like this one, and I made the wrong one. I have spent three days trying to get back to the moment before I made it.' She pauses. 'You are that moment.' A sound drifts down the empty street — low, rhythmic, like slow breathing. Getting closer. 'We need to move,' she says. 'Right now.'",
                  choices: [],
                },
              ],
            },
          ],
        },
        {
          id: "node-b2",
          title: "Third Floor",
          label: "Switch on the bedroom light",
          text: "You reach for the lamp and flood the room with warm light. Nothing. The room is exactly as it always is — your clothes on the chair, the glass of water on the nightstand, the crack in the ceiling you keep meaning to fix. You exhale slowly and almost laugh at yourself. Then the knock comes again — sharp, deliberate — from your bedroom window. The one behind your headboard. You sleep on the third floor.",
          choices: [
            {
              id: "node-b2a",
              title: "Your Face",
              label: "Look at the window",
              text: "You turn slowly. A hand is pressed flat against the outside of the glass — palm open, fingers spread. Your hand. Same scar across the knuckle from a childhood fall. Same ring on the fourth finger. You have not moved. You are sitting in your bed. Staring at your own hand pressed against a window three floors up. Slowly, a face rises into view behind it. Your face. Your features exactly — but the skin is wrong, too pale, pulled too tight — and the eyes are white. It holds your gaze for a long moment. Then it mouths two words, slowly and clearly: Let. Me. In.",
              choices: [
                {
                  id: "node-b2a1",
                  title: "Open the Window",
                  label: "Open the window and let it in",
                  text: "Your hand moves to the latch before you have consciously decided to move it. The window swings open. Cold air floods in. The thing outside — the thing wearing your face — steps through the frame without a sound and stands at the foot of your bed. Up close its eyes are not just white — they shift, like something moving behind frosted glass. It looks around your room slowly, taking in everything. Then it looks at you. 'Thank you,' it says in your voice. 'I have not been warm in a very long time.' It sits down in your chair. It does not move again. And somehow, impossibly, you fall asleep.",
                  choices: [],
                },
                {
                  id: "node-b2a2",
                  title: "Seal It Out",
                  label: "Back away and barricade the window",
                  text: "You scramble backward off the bed and drag your wardrobe across the room, slamming it against the wall below the window. The knocking stops. Silence. Then the knock comes from the next window. Then the next. Moving around the outside of the house methodically, testing each one. You stand in the center of your room turning slowly as it circles. Then it stops. Total silence. A full minute passes. Then your phone rings. Unknown number. You answer it without meaning to. Your own voice says, quietly and without malice: 'There are more windows than you think.'",
                  choices: [],
                },
              ],
            },
            {
              id: "node-b2b",
              title: "Something Exhales",
              label: "Kill the light and hide",
              text: "You snap the lamp off and press yourself into the gap between the wardrobe and the wall, knees pulled to your chest, barely breathing. The knocking does not come again. Silence fills the room completely. One minute. Five. Twenty. Your legs cramp. Your eyes ache from the dark. You begin to think it is over — that you imagined it, or that whatever it was has gone. You start to ease yourself upright. Then the blanket on your bed shifts. Slowly, deliberately, from one side to the other — like something turning over underneath it. And then, from beneath the covers, something exhales. Long. Slow. Satisfied. Like something that has been holding its breath for a very long time and has finally decided to stop.",
              choices: [
                {
                  id: "node-b2b1",
                  title: "Pull the Blanket",
                  label: "Cross the room and pull the blanket off",
                  text: "You move across the room in the dark, hand outstretched, and close your fingers around the edge of the blanket. One pull — fast, hard. The bed is empty. Nothing there. You stand over it, breathing hard, staring at the ordinary mattress and the flat sheets. Then you feel it — a hand, from behind, resting very gently on your shoulder. And a voice beside your ear, almost tender: 'You were so close. You almost did not look.'",
                  choices: [],
                },
                {
                  id: "node-b2b2",
                  title: "The Window",
                  label: "Ignore it and climb out the bedroom door instead",
                  text: "You do not look at the bed. You keep your eyes forward, move along the wall to the bedroom door, ease it open, and slip into the hallway. You make it downstairs. Front door. Out into the street. You sit on the curb in the cold for two hours, watching your house, waiting. Nothing moves. No lights. No sounds. As the sky begins to lighten toward dawn you go back inside. The house is empty and still. You check every room. In your bedroom the blanket is folded neatly on the chair — which you did not do. And on your pillow, where your head was, there is a single muddy footprint. Small. Barefoot. Pointing toward the window.",
                  choices: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
