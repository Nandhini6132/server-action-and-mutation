'use client'

export default function Home() {

  let items=[["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]]
  let ruleKey="color"
  let ruleValue="silver"

  var countMatches = function(items, ruleKey, ruleValue) {
  
    let a=items.map(a=>a)
    console.log(a)
  };

  countMatches(items,ruleKey,ruleValue)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
    </main>
  );
}
