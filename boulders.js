const TEXT = `⚡️ flash
⚡️🙈 on sight
⚡️🔄 day flash
✅ send
✅🙈 no beta send
📈 projected
✅📈 send of project
✅📉 send after unsend
📉 unsent
🔄 resent
🆕 put up that day
👀 sussed
💀 high danger

8/18/18 (Jackson Falls, IL)
⚡️🙈🆕 Don’t Mind the Down Climb v0+

10/6/18 (Holy Boulders, IL🦟)
✅ Mollusk v2-3
📈 Con Artist v7
✅ Bar Stool Area
✅ KFC v3
✅ Sukha v3
📈 Calypso v6
First time outdoor bouldering! Went w David, Phil, Jared👑 & others. It was so humid & clouds of mosquitos followed us from boulder to boulder...but I loved it!

10/28/18 (Holy Boulders, IL) 👑
✅ KFC v3
✅ Shadow of a Man v5
✅🔄 Sukha v3
📈 Sukha Sit v5
📈 Empty Nest Syndrome v6
Came back w David, Kelly & Brandon. First day touching Shadow of a Man and it went down. Much better fall weather this time!

12/24/18 (Zion National Park, UT) 👑
📈 Drilled Pocket Problem v2-3
✅🆕 Drilled Pocket Problem Right v1
Epic send during the lavender hour in the National Park on Christmas Eve after hiking Angel’s Landing.

12/27/18 (Kraft Boulders, NV 🌨) 👑
📈 Kraft Dinner v8
👀 Kraft Dinner Right v7
⚡️ Monkey Bars v2
📈 Classic Monkey v6

12/30/18 (Kraft Boulders, NV) 👑
✅ Porkchop v3
📈 The Pearl v5
✅ Jenna’s Jewelry v3-4

3/23/19 (Elephant Rocks, MO 🌧)
⚡️ Finger Crack v1
✅ Thunder Cling v1
✅ Flake Slab v1
✅ Vector Days v3
⚡️ Greenhouse v1
⚡️🙈 Lightning Crack v2
📈 Smoke v4
Dave toured our crew around the park and at the end of the day it was raining and Brandon👑 sent Smoke! 😱

3/31/19 (Elephant Rocks, MO)
✅📈 Smoke v4
📈 BVD v4
📈 Big Foot v5
⚡️🔄 Greenhouse v1
✅ Knob Job v1
📈 Last Picnic v6
Brought Justin down for his first outdoor bouldering sesh. Showed him the classic circuit and he took photos of Brandon👑, Zack and I. Happy to put down Knob Job.`

const init = () => {
   const entries = TEXT.split('\n\n');
   const legend = entries[0]
   const rawLegendItems = legend.split('\n')
  
  const legendItems = rawLegendItems.map((rawLegendItem, i) => {
    const mixRawItems = rawLegendItem.split(' ');
    const emoji = mixRawItems[0];
    const description = mixRawItems.slice(1).join(' ');
    const legendItem = { [emoji]: description }
    return legendItem
   })
          
   const journalEntries = entries.slice(1);
   const eachJournalLine = journalEntries.map((journalEntry, i) => {
       const journalEntryLines = journalEntry.split('\n')
       journalEntryLines.forEach( journalEntryLine => {
        const mixJournalEntries = journalEntryLine.split(' ');
        const firstElementOfJournal = mixJournalEntries[0];
       const climbName = mixJournalEntries.slice(1).join(' ');
       const climbResult = { [firstElementOfJournal]: climbName}
       console.log('climb result', climbResult)
    })
       
       
       
       
   })
   

       
}    

  


init()

