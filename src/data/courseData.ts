export type Lesson = {
  title: string;
  subtitle: string;
  content: string; // HTML string
};

export type ContentLang = {
  title: string;
  description: string;
  lessons: Lesson[];
};

export interface Module {
  id: number;
  icon: string;
  en: ContentLang;
  am: ContentLang;
}

export const courseData: Module[] = [
  {
    id: 1,
    icon: "Lightbulb",
    en: {
      title: "Introduction",
      description: "Learn what a cryptocurrency is and what makes it special. You'll also meet your friendly guide who will explain their approach to teaching crypto.",
      lessons: [
        {
          title: "What is a Cryptocurrency?",
          subtitle: "How are they different from traditional currencies? What makes them so special?",
          content: `
<h1>1. What is a Cryptocurrency?</h1>

<p>What is a cryptocurrency?</p>

<p>Cryptocurrencies have become extremely popular in recent years. Not just online, but everywhere.</p>

<p>You've probably even seen TV commercials about cryptocurrencies being the next big thing. And maybe even your favorite actor or athlete promoting them.</p>

<p>But what are they?</p>

<p>How are they different from traditional currencies? What makes them so special?</p>

<h2>What are cryptocurrencies?</h2>

<p>A cryptocurrency (or "crypto") is an umbrella term for a new kind of "digital money" that relies on a combination of technologies that allows it to exist outside the control of central authorities like governments and banks.</p>

<img src="https://bpcdn.co/images/2022/02/15201143/bitcoin-digital-currency.png" alt="Cryptocurrency concept illustration" style="background-color: white;" />

<h2>Cryptocurrencies are digital.</h2>

<p>Cryptocurrencies have no physical form. There are no dollar bills or metal coins.</p>

<p>They are completely digital, meaning they're literally just lines of computer code.</p>

<h2>Cryptocurrencies are borderless.</h2>

<p>Regardless of where you live or who you are, you can send it almost instantaneously to others anywhere in the world, without concern for geographic distance and country borders.</p>

<p>Cryptocurrencies are borderless. All you need is a device, like a phone or a computer, that's connected to the internet.</p>

<h2>Cryptocurrencies are permissionless.</h2>

<p>Anybody can send and receive cryptocurrencies. You don't need to register an account or fill out an application. Cryptocurrencies are permissionless.</p>

<p>You don't even need to give your name. Instead of names and account numbers, all you need to provide is a computer-generated string of letters and numbers known as an "address". This address is not inherently tied to any of your personal information, so you can theoretically send cryptocurrencies to other people without ever knowing each other's actual identities.</p>

<img src="https://bpcdn.co/images/2022/02/15200642/bitcoin-decentralized-currency.png" alt="Permissionless transactions illustration" style="background-color: white;" />

<p>Since you can send and receive cryptocurrencies without giving any personally identifying information, cryptocurrencies provide some degree of privacy.</p>

<h2>Cryptocurrencies are decentralized.</h2>

<p>Unlike traditional currencies, also known as "fiat" currencies, such as the U.S. dollar, cryptocurrencies are not connected to any government or central bank.</p>

<p>For example, the U.S. dollar is issued and controlled by the Federal Reserve ("Fed"), the euro by the European Central Bank (ECB), and the Japanese yen by the Bank of Japan (BOJ).</p>

<img src="https://bpcdn.co/images/2022/08/22221616/crypto-software.png" alt="Central banks comparison" style="background-color: white;" />

<p>This means that, unlike fiat currencies, cryptocurrencies are not controlled by a central authority. There is no bank or government behind them. This defining feature of cryptocurrencies is known as decentralization.</p>

<p>If no central bank or government issues or creates cryptocurrencies, then who creates them?</p>

<p>Units of a cryptocurrency are generated based on predetermined rules written in code which are executed by software.</p>

<p>One of the most important aspects of cryptocurrencies is their supply since this heavily determines their utility and value.</p>

<p>Depending on the rules written in the code of the software, cryptocurrencies can be created and destroyed. Some cryptocurrencies have a finite (or fixed) total supply, meaning that there is a maximum number of units that will ever be in circulation, creating scarcity.</p>

<p>Others are launched with an infinite total supply, meaning there is no maximum cap! (Although there might be a limit on the number of new units that can be created within a certain timeframe such as on a yearly basis.)</p>

<h2>Cryptocurrencies are counterfeit-proof.</h2>

<p>Cryptocurrencies are also designed to be counterfeit-proof. This is where cryptography is involved and how it's used to securely record and store transactions.</p>

<img src="https://bpcdn.co/images/2022/02/15210311/cryptography-hidden-writing-150x150.png" alt="Cryptography illustration" style="background-color: white;" />

<p>In cryptography, the prefix "crypt" means "hidden" and the suffix "graphy" means "writing".</p>

<p>Before computers existed, cryptography was the study of techniques to keep handwritten information safe from prying eyes.</p>

<p>Even Julius Caesar was known to use cryptography to communicate with his generals.</p>

<p>But in the modern age, cryptography is now associated with protecting computer information using fancy math.</p>

<p>Since cryptocurrencies rely on cryptography for their security, that's where the "crypto" comes from in "cryptocurrencies."</p>

<h2>What makes cryptocurrencies special?</h2>

<p>Cryptocurrencies exist independently from any government, central bank, or other central institution.</p>

<h2>In summary, cryptocurrencies are special because:</h2>

<ul>
<li>They are digital. Cryptocurrencies have no physical form. Everything is done from phones and computers.</li>
<li>They are borderless. Anyone with an internet connection can send and receive cryptocurrencies anywhere in the world, with (usually) smaller fees and faster speeds than traditional money transfers.</li>
<li>They are permissionless and available to everyone. You don't need to be approved by a bank and have a bank account to use cryptocurrencies. No third party (like a bank) needed to confirm and approve transactions.</li>
</ul>

<p>They provide some degree of privacy, which means that you can make transactions without using your name. Different cryptocurrencies vary in the degree of anonymity they provide.</p>

<p>They are decentralized, which means governments can't meddle with or control them. No one person or entity owns or controls them. Users can transact directly without the involvement of any intermediary, which for fiat currencies, would usually be a bank.</p>

<p>They are created by software. The supply of a cryptocurrency is NOT determined by any central bank but based on predefined rules explicitly written in software code. In other words, software replaces the central bank.</p>

<p>They are counterfeit-proof. This is due to the way the transaction information is recorded and stored.</p>

<p>Due to these special characteristics, cryptocurrencies provide the potential to give people total control of their money with zero involvement from a third party.</p>

<p>Whether crypto can live up to this potential remains to be seen. Its popularity in the financial world is growing and is now considered an emerging asset class.</p>
`
        },
        {
          title: "Crypto As A New Asset Class",
          subtitle: "Cryptocurrencies are now seen as financial assets that can be held as alternative investments. Learn why many consider crypto as a brand new asset class.",
          content: `
<h1>2. Crypto As A New Asset Class</h1>

<p>In the previous lesson, you were introduced to cryptocurrencies and learned why they're different from traditional currencies.</p>

<p>Aside from functioning as a new kind of "digital money" that's used to pay for goods and services, cryptocurrencies are more often used as financial assets that people trade or invest in.</p>

<p>The traditional financial ("TradFi") industry is still divided on whether crypto should be considered a "financial asset".</p>

<p>The popular argument is that they're impossible to value because there are no earnings or dividends, but there are financial assets with similar issues like gold and other commodities.</p>

<p>I view cryptocurrencies as a financial asset. More broadly, I view cryptocurrencies as a brand new asset class. (Currently, a very speculative asset class.)</p>

<p>Even Jerome Powell, the head of the Federal Reserve, has said, "People use bitcoin as a speculative asset. It's just like gold, only it's virtual, it's digital."</p>

<p>Bitcoin is increasingly also acting as a global, portable "neutral reserve asset," especially in countries or scenarios where trust in sovereign currencies is low.</p>

<p>Asset classes are categories of investments that have similar characteristics and behave in a similar way, such as stocks, bonds, commodities, real estate, and cash (fiat currencies).</p>

<h2>Examples of Asset Classes</h2>

<table>
<tr><th>Stocks</th><th>Fixed Income</th><th>Commodities</th><th>Real Estate</th><th>Cash</th></tr>
<tr><td>Ownership into a business</td><td>Lending money to someone</td><td>Ownership of goods which has an end use</td><td>Ownership of physical space</td><td>Ability to buy anything</td></tr>
</table>

<img src="https://bpcdn.co/images/2022/02/16114521/asset-classes.png" alt="Asset classes illustration" style="background-color: white;" />

<h2>And now there's…crypto!</h2>

<p>Crypto represents the first truly new asset class in decades. 🤯</p>

<p>Rather than just being used as a means of payment, like to pay for food at a restaurant, most cryptocurrencies are used to make speculative trades or held as investments by people who expect their value to rise.</p>

<p>Similar to the forex market, which is the financial market for fiat currencies, there's now a crypto market, a financial market for cryptocurrencies, where both traders and investors can make money.</p>

<p>But while the forex market is open 24 hours a day, 5.5 days a week, the crypto market is open 24 hours a day, 7 days a week. It never closes!</p>

<p>Traders make bets ("speculate") on short-term price direction, while investors buy and hold in hopes that certain cryptocurrencies gain wider user adoption and increase in value over the long term.</p>

<p>Adding crypto helps investors diversify their portfolios. And more experienced crypto investors even generate passive income from different cryptocurrencies they hold.</p>

<p>Since cryptocurrencies are financial assets that you can invest in or trade, they're also referred to as "digital assets" or "cryptoassets" or "crypto assets".</p>

<h2>Examples of Crypto</h2>

<p>The first cryptocurrency was Bitcoin, and it remains the biggest and most well-known.</p>

<img src="https://bpcdn.co/images/2022/02/21153121/other-cryptocurrencies.png" alt="Bitcoin and other cryptocurrencies" style="background-color: white;" />

<p>There are also other well-known cryptocurrencies like Ether, XRP, Cardano, Solana, Dogecoin, Polkadot, Litecoin, Cosmos, and many others.</p>

<p>Some are similar to Bitcoin. Others are based on different technologies, or have new features that make them totally different from Bitcoin.</p>

<p>The term "cryptocurrency" is actually misleading because, unlike Bitcoin, most cryptocurrencies do not function as actual currencies.</p>

<p>Today, there are now THOUSANDS of cryptocurrencies that have been created, with each trying to offer new or improved functionalities.</p>

<img src="https://bpcdn.co/images/2022/02/16154624/galaticoin.png" alt="Thousands of cryptocurrencies" style="background-color: white;" />

<p>from earlier cryptocurrencies or to serve a totally different purpose or use case.</p>

<p>Unfortunately, many are actually useless or, even worse, outright scams, but a lot of people still buy them.</p>

<p>Gullible noobs entering the crypto world hear about "A coin that will not only change the world but change the galaxy!"</p>

<p>They think: "I must buy this Galaticoin!"</p>

<img src="https://bpcdn.co/images/2019/02/26172550/buy-galaticoin-no-fomo-287x360.png" alt="Galaticoin scam illustration" style="background-color: white;" />

<p>They buy the dubious coin and give away their money without understanding the underlying technology.</p>

<p>No FOMO fo me!</p>

<p>The cryptocurrency ends up being worthless.</p>

<p>Some people are jumping into the crypto market with the wrong mentality. They believe that it's a sure bet….that the money they put in will just automatically grow.</p>

<img src="https://bpcdn.co/images/2022/02/16124644/one-legged-deer.png" alt="Wrong mentality illustration" style="background-color: white;" />

<p>With this mentality, it's not surprising that a scam artist or shiller sees today's cryptocurrency market like how a tiger sees a herd of one-legged deer.</p>

<p>Lots of delicious opportunities.</p>

<p>Don't be a one-legged deer.</p>

<p>That's my mission…</p>

<p>"Don't let you become a one-legged deer."</p>
`
        },
        {
          title: "Meet Toshi Moshi",
          subtitle: "Meet Toshi Moshi, your friendly guide into the world of crypto.",
          content: `
<h1>3. Meet Toshi Moshi</h1>

<p>Hello there! 👋</p>

<p>My name is Toshi Moshi.</p>

<p>Welcome to my School of Crypto! I will be your friendly guide. 🏫</p>

<img src="https://bpcdn.co/images/2022/02/16125723/toshi-welcome.png" alt="Toshi Moshi character" style="background-color: white;" />

<h2>Introduction to Cryptocurrencies</h2>

<p>If you're new to cryptocurrencies, you've come to the right place! I created this course to make it easier for beginners to understand the crypto market.</p>

<p>I provide easy-to-understand information on bitcoin, altcoins, tokens, and the crypto market in general.</p>

<p>Mainstream awareness of crypto has been gaining momentum. Every day, more and more people jump on the crypto bandwagon whether it's due to a strong passion for the technology's potential to positively impact the future or simply due to FOMO (fear of missing out). Along with this increased interest though, has brought an increase in questionable advice and misinformation.</p>

<p>Every day, more and more snake oil salesmen, conmen, shillers, shysters, fraud artists, and other shady folk grace us with their sleazy presence.</p>

<h2>Risks in the Crypto Market</h2>

<p>There are risks associated with the crypto market, which you need to take time to understand.</p>

<p>A lot of new traders make the mistake of wanting to get in as fast as they can, hoping to make quick profits and…. of course….get rich quickly!</p>

<p>It's mind-bogglingly to see so many folks on TikTok, Twitter, and Reddit gambling away their money so they can buy a lambo.</p>

<img src="https://bpcdn.co/images/2022/02/16131504/shady-coin-homeless.png" alt="Lambo dreams illustration" style="background-color: white;" />

<p>At BabyPips.com, we encourage a different approach.</p>

<p>Just like we've stressed that forex trading is not a get-rich-quick scheme, you will not hear any get-rich-quick messages from us regarding crypto!</p>

<p>We strongly encourage that you take a conservative approach and only put a SMALL portion of your overall capital that you would use to invest or trade in the financial markets.</p>

<p>It's no exaggeration when we say that cryptocurrencies are extremely speculative. If you're not properly managing your risk, the probability that you'll lose a lot (if not all) of your money is high.</p>

<p>Caution and care should be exercised.</p>

<h2>CAUTION!</h2>

<p>Don't fall for the typical get-rich-quick pitch:</p>

<p>"Don't worry if you don't understand it. The people who do understand say it's going to be massive! It's the next big thing!"</p>

<p>I disagree.</p>

<img src="https://bpcdn.co/images/2022/02/16171813/toshi-caution.png" alt="Caution illustration" style="background-color: white;" />

<p>YOU do need to understand it.</p>

<p>I want you to be able to make informed decisions, to intelligently think about exactly what it is that you're buying, and know what the risks are and how to properly manage these risks.</p>

<p>In the future, when your grandkids visit you, which do you want to be telling them:</p>

<p>"I missed the boat on crypto."</p>

<p>"I bet your life savings and bought crypto, then lost it all because I didn't really understand what it was all about…and got suckered by some charismatic scammers…..which is why I'm now single and still living here with your great-grandma."</p>

<img src="https://bpcdn.co/images/2022/07/21110412/old-crypto-trader.png" alt="Grandkids scenario illustration" style="background-color: white;" />

<p>Hopefully, you will be telling them neither!</p>

<p>I want to prevent you from becoming a sucker.</p>

<p>I think it's crucial to at least have a basic understanding of the underlying technology and concepts of cryptocurrencies before plunking down any amount of money.</p>

<img src="https://bpcdn.co/images/2022/02/16173431/toshi-welcome-aboard.png" alt="Education is key illustration" style="background-color: white;" />

<p>My hope is that this course provides a strong foundation for those who are noobs and are just starting their journey into the crypto world.</p>

<p>By the end of this course, you will be able to decide whether the crypto world is for you.</p>

<p>Let's get started!</p>

<p>Educating yourself is the key to success in trading or investing in crypto. It can mean the difference between generating wealth and losing it all.</p>
`
        },
        {
          title: "Getting Started With Bitcoin",
          subtitle: "Crypto has a steep learning curve and can be overwhelming. Rather than try to learn about the entire crypto market all at once, let's start with Bitcoin!",
          content: `
<h1>4. Getting Started With Bitcoin</h1>

<p>Today, there are thousands of different cryptocurrencies out in the crypto market.</p>

<p>And when prices have surged in the past, the total value of all these cryptocurrencies has exceeded $3 trillion, with a daily trading volume of over $300 billion.</p>

<p>In other words, the crypto market has grown rapidly and it's now pretty big. (But still nowhere as huge as the forex market.)</p>

<p>For crypto noobs, just trying to figure out where to begin can feel overwhelming. 😅</p>

<p>So rather than try to learn about the entire crypto market all at once, and get overwhelmed, I'm going to start with Bitcoin.</p>

<img src="https://bpcdn.co/images/2022/02/20104932/bitcoin-yay.png" alt="Understanding Bitcoin illustration" style="background-color: white;" />

<h2>Understanding Bitcoin</h2>

<p>Since Bitcoin was the original cryptocurrency, the technical breakthroughs that allowed Bitcoin to emerge underlie all other cryptocurrencies.</p>

<p>Understanding Bitcoin, like what it is, where it came from, and how it works provides a solid foundation for being able to navigate the entire crypto space.</p>

<p>Many of the concepts needed to understand Bitcoin can be applied to other cryptocurrencies.</p>

<p>So if you can get a firm enough grasp of Bitcoin to not be mystified by the topic….which is my aim….then you will have a much easier time understanding the rest of the crypto world.</p>

<p>I will start with a gentle introduction to Bitcoin and assume you have little to no technical knowledge.</p>

<h2>What is Bitcoin?</h2>

<p>Let's start with a very simple description of Bitcoin….</p>

<p>Bitcoin is a decentralized digital currency, based on an open-source software design, that is used to transmit value between pseudonymous users.</p>

<p>All transactions, after being confirmed by miners using PoW as the consensus mechanism, are stored on a distributed ledger, called a blockchain.</p>

<p>Changes to the blockchain are append-only and are synchronized about every 10 minutes across thousands of nodes located all over the world over a P2P network. All information stored on the blockchain can be viewed publicly, in real-time.</p>

<img src="https://bpcdn.co/images/2019/02/27160006/toshi-jargon-overload.png" alt="Bitcoin technical description" style="background-color: white;" />

<p>Cryptographic techniques such as public-key cryptography, hash functions, and digital signatures are used to keep the blockchain secure and immutable so it can be accessible to everybody but hackable to nobody.</p>

<p>Got all that? 🤔</p>

<p>I'm kidding!</p>

<p>But give yourself a pat on the back for actually reading all that and not scrolling past it. (You didn't scroll past it, right? 👀)</p>

<p>Have no fear. Do NOT be intimidated or discouraged.</p>

<h2>BEGINNER'S guide to Bitcoin</h2>

<p>This is the BEGINNER'S guide to Bitcoin and we assume zero technical knowledge.</p>

<p>So this is NOT really how we're going to start learning about Bitcoin.</p>

<p>But as you can clearly see, the crypto world is full of technical jargon!</p>

<img src="https://bpcdn.co/images/2022/02/16140629/crypto-jargon.png" alt="Technical jargon illustration" style="background-color: white;" />

<h2>WTF am I reading?!</h2>

<p>Jumping into crypto introduces a large number of terms that most people will be unfamiliar with.</p>

<p>The crypto world seems to have its own language and those wishing to learn about the topic can quickly become overwhelmed with all the jargon, acronyms, and other technical terms. But if you really want to understand cryptocurrencies and how they are different, it's really important that you do familiarize yourself with certain core foundational concepts.</p>

<p>My goal is to cover terms and phrases that you may initially not know, but do need to know.</p>

<p>Together, we will blast jargon into smithereens so you're able to easily speak the language of the crypto world with ease.</p>

<img src="https://bpcdn.co/images/2022/02/16134311/jargon-blaster.png" alt="Jargon Blaster illustration" style="background-color: white;" />

<p>I've also found a lot of inconsistencies in how certain terms are used or defined on the interwebz.</p>

<p>I want to establish a common vocabulary with clear definitions of concepts and terms.</p>

<p>This will help make sure that every time a buzzword or jargon phrase appears throughout our course, it is used consistently and correctly.</p>

<p>I can't stress enough the importance of learning the concepts behind all this ridiculous wonderful jargon.</p>

<p>How else will you impress your dinner date or wow a crowd at cocktail parties?</p>

<img src="https://bpcdn.co/images/2022/02/16161047/crypto-party.png" alt="Cocktail party crypto talk" style="background-color: white;" />

<p>The hashrate on my nodes are huge!</p>

<p>Do you give a nervous smile or chuckle when someone mentions crypto because you're clueless?</p>

<p>Those days will soon be over.</p>

<p>By the end of this course, you WILL be able to understand the geeky definition of Bitcoin that I wrote earlier in this lesson. 🤓</p>

<p>(If you scrolled past it earlier, scroll back up!)</p>

<p>You'll be knowledgeable enough to be able to approach unfamiliar crypto terminology with confidence.</p>

<p>You'll go from "crypto clueless" to "crypto competent". 💪</p>

<p>Now back to Bitcoin….</p>
`
        }
      ]
    },
    am: {
      title: "መግቢያ",
      description: "ክሪፕቶኩረንሲ ምን እንደሆነ እና ምን እንደሚያደርገው ልዩ ይማሩ።",
      lessons: []
    }
  },
  {
    id: 2, icon: "Bitcoin",
    en: {
      title: "Beginner's Guide to Bitcoin",
      description: "Understanding Bitcoin, like what it is, where it came from, and how it works provides a solid foundation for being able to navigate the entire crypto space.",
      lessons: [
        {
          title: "What is Bitcoin?",
          subtitle: "Bitcoin is known as the original cryptocurrency. The first of its kind.",
          content: `
<h1>1. What is Bitcoin?</h1>

<p>Depends on who you ask. If it's Warren Buffet, he'd say it's "probably rat poison squared". (But then invests in a digital bank that focuses on crypto.)</p>

<p>Unless you've been living under a rock or never leave your sofa and just binge-watch Netflix shows all day long, you've probably heard of bitcoin.</p>

<p>Bitcoin is known as the original cryptocurrency.</p>

<p>The first of its kind.</p>

<h2>Bitcoin: The First Cryptocurrency</h2>

<p>Bitcoin is a new kind of "money", a digital currency that's designed to let you store, send, and receive "money" online without any banks or other financial institutions.</p>

<p>Unlike fiat currencies, such as the U.S. dollar or the British pound, Bitcoin is not controlled by any central bank or government. Instead, rules that govern its use and supply are controlled by software.</p>

<p>In 2008, Bitcoin was created by a mysterious person calling himself, "Satoshi Nakamoto".</p>

<img src="https://bpcdn.co/images/2022/02/17161513/bitcoin-first-cryptocurrency-360x257.png" alt="Satoshi Nakamoto Bitcoin creator" style="background-color: white;" />

<p>To this day, his true identity remains anonymous. Nobody knows (at least publicly) who Satoshi Nakamoto is.</p>

<p>Since he's the creator of Bitcoin, I also like to call Satoshi Nakamoto the "Bitcoin God".</p>

<img src="https://bpcdn.co/images/2022/02/16174359/bitcoin-god.png" alt="Bitcoin God illustration" style="background-color: white;" />

<p>The Bitcoin God could be a man, woman, group of people, or even a highly intelligent space alien. Nobody knows!</p>

<p>What we do know is that on Halloween (October 31) in 2008, Satoshi Nakamoto published a whitepaper titled "Bitcoin: A Peer-to-Peer Electronic Cash System".</p>

<p>It was a 12-page summary of the Bitcoin God's creation. The whitepaper provided a technical overview of Bitcoin and described how it would all work operationally.</p>

<p>A whitepaper is a document written by a creator(s) of a crypto project that explains the project's purpose and provides technical information regarding its underlying technology.</p>

<p>In early January 2009, the first version of Bitcoin software, version 0.1, was released on an obscure mailing list.</p>

<p>The software controls the creation and use of bitcoins and imposes a fixed supply of 21 million. Bitcoins are created through a process called "mining" which now involves specialized computers competing to win a number-guessing game where the winning "miner" is rewarded with brand new bitcoins.</p>

<p>Over 19 million of those have been created (or "mined") so far with the last bitcoin expected to be mined in 2140.</p>

<p>Bitcoin's fixed supply is in contrast to traditional fiat currencies, such as the U.S. dollar, which can be created at will and in unlimited quantities by central banks.</p>

<p>Bitcoin devotees believe that since there is a limit on the number of bitcoins that will ever exist, this scarcity is where Bitcoin gets its value.</p>

<p>Satoshi Nakamoto made Bitcoin's source code open to the public and encouraged others to continue developing Bitcoin.</p>

<p>Open source software means the source code is not proprietary. Any developer can view the source code and modify it.</p>

<p>Over time, the original source code was then refined by other software developers, many of whom worked voluntarily similar to the volunteers that write and edit the pages of Wikipedia.</p>

<p>In late April 2011, Satoshi Nakamoto sent one of the software developers a brief email saying, "Yo! I'm out! ✌"</p>

<p>Just kidding, The real message was, "I've moved on to other things." And then he disappeared, never to be heard from again.</p>

<img src="https://bpcdn.co/images/2022/03/23155811/satoshi-nakamoto-exits-360x360.png" alt="Satoshi Nakamoto disappeared" style="background-color: white;" />

<p>And the rest is history.</p>

<p>Wait. What? He/she/they/it just bounced?!</p>

<p>Yep.</p>

<p>Satoshi Nakamoto ghosted the Bitcoin community!</p>

<p>I don't know how it feels to be ghosted but I'm sure some of y'all do and I'm sure it feels horrible.</p>

<p>But it's all good though, the disappearance of its creator wasn't fatal to Bitcoin.</p>

<p>After more than a decade, Bitcoin continues to run strong, allowing users from around the world to transact in bitcoins with each other.</p>

<p>The first known exchange rate for bitcoin was in October 2009. With $1, you could buy 1,309 bitcoins!</p>

<p>It wasn't until February 2011 that the price of bitcoin reached parity with the U.S. dollar, where $1 = 1 bitcoin. ⚖</p>

<p>As confidence in Bitcoin grew, so did the demand for the cryptocurrency, which increased its price.</p>

<p>In 2013, bitcoin went from $13 to $1,157! A gain of 8,800%!</p>

<p>In 2017, probably when Bitcoin finally lost its status as an "underground" currency, started the year at $1,000 and almost hit $20,000…before crashing hard.</p>

<p>But Bitcoin has proven that it's hard to kill.</p>

<p>In November 2021, bitcoin's price reached an all-time high of over $68,000.</p>

<p>Then plummeted back to below $16,000. And then bottomed and made a higher all-time high of over $75,000 in March 2024!</p>

<p>A couple of months later, after Donald Trump won the U.S. presidential election, crypto mania returned and pushed bitcoin above $90,000!</p>

<p>On December 4, 2024, bitcoin smashed through the $100,000 barrier!</p>

<h2>Price Milestones of Bitcoin</h2>

<p>In summary, here are the price milestones that bitcoin has reached over the years:</p>

<table>
<thead><tr><th>Date</th><th>Price</th></tr></thead>
<tbody>
<tr><td>February 10, 2011</td><td>$1</td></tr>
<tr><td>March 31, 2013</td><td>$100</td></tr>
<tr><td>November 28, 2013</td><td>$1,000</td></tr>
<tr><td>November 29, 2017</td><td>$10,000</td></tr>
<tr><td>December 04, 2024</td><td>$100,000</td></tr>
</tbody>
</table>

<p>What's crazy is that Satoshi Nakamoto still owns over 1 million bitcoins! But while the Bitcoin God is now a bazillionaire, becoming rich wasn't the reason for creating Bitcoin.</p>
`
        },
        {
          title: "Why Was Bitcoin Created?",
          subtitle: "Satoshi Nakamoto wanted to create electronic cash that would allow online payments without going through a financial institution.",
          content: `
<h1>2. Why Was Bitcoin Created?</h1>

<p>Depending on who you ask, the word "Bitcoin" can have many different definitions.</p>

<p>And as some start explaining what Bitcoin is, that's when you'll typically start hearing tech jargon spewed out.</p>

<p>Words like "blockchain" and "protocol". And phrases like "peer-to-peer networks" and "distributed ledgers".</p>

<p>OMG! Jargon overload! 🤮</p>

<p>It's easy to feel like you're drowning in a sea of terms. Trying to accurately describe "Bitcoin" can get technical and complicated really fast! 🤯</p>

<p>So rather than go that route, I think a better approach is to start with the PROBLEMS that Bitcoin was trying to solve.</p>

<p>Once you understand that, everything will become much clearer for you and you'll be able to grasp the technical concepts faster and follow along much more easily.</p>

<h2>Why was Bitcoin created?</h2>

<p>According to the Bitcoin white paper, Satoshi Nakamoto wanted to create:</p>

<blockquote><p>"…electronic cash that would allow online payments to be sent directly from one party to another without going through a financial institution."</p></blockquote>

<h2>Translation:</h2>

<p>"Physical cash allows me to transact directly in the REAL WORLD with another person without the need of a bank. I like this freedom. I want this same freedom ONLINE. So I need a digital version of cash or digital cash."</p>

<p>Satoshi's answer: Bitcoin.</p>

<p>The concept of creating a digital version of cash that can be sent around online without a "trusted intermediary" sounds simple but before Satoshi Nakamoto created Bitcoin, all previous attempts were unsuccessful.</p>

<p>This had never been done before.</p>

<p>Let me explain why using an example.</p>

<p>Let's say that Ursula the Unicorn bakes and sells cupcakes.</p>

<h2>These cupcakes are special.</h2>

<p>They sing. They're waterproof.</p>

<h2>They are singing waterproof cupcakes!</h2>

<img src="https://bpcdn.co/images/2022/02/16203447/ursula-the-baker.png" alt="Singing waterproof cupcakes" style="background-color: white;" />
<img src="https://bpcdn.co/images/2022/02/16204226/singing-cupcake.png" alt="Cupcake illustration" style="background-color: white;" />

<p>And each cupcake only cost $1. With air delivery, via unicorn, included for free.</p>

<p>Molly the Mermaid wants to buy one cupcake from Ursula.</p>

<p>So they meet up and transact with cold hard cash.</p>

<p>Here's what happens:</p>

<p>Molly gives the $1 bill to Ursula.</p>

<img src="https://bpcdn.co/images/2019/02/26191559/cash-transaction1.png" alt="Molly and Ursula cash transaction" style="background-color: white;" />

<p>The $1 bill is now physically owned by Ursula.</p>

<p>Ursula trusts that the $1 bill is unique and real.</p>

<p>The $1 bill is unique and real because it can be verified since it's issued by a central bank.</p>

<p>Due to these properties, the $1 bill is used as a medium of exchange…meaning other people are willing to exchange the $1 bill for stuff ("goods and services") they want.</p>

<p>Ursula gives the cupcake to Molly.</p>

<p>Now let's say that Molly is soooo far away that the distance would be even way too far for even Ursula to fly and deliver the cupcake herself. She'll have to ship it via an air courier service like FedEx or UPS.</p>

<p>Ursula wants Molly to send payment first….online.</p>

<p>But how will Molly handle payment?</p>

<p>How can Molly send cash over the internet?</p>

<h2>There lies the problem with cash.</h2>

<p>Cash is money in the PHYSICAL form of currency, such as paper banknotes (dollah dollah billz yo!) and metal coins.</p>

<p>But we have a problem….</p>

<p>You can't send physical cash over the internet!</p>

<p>Buyers and sellers have to be physically present at the same location in order to transact in cash, which isn't always possible.</p>

<img src="https://bpcdn.co/images/2022/02/16213224/face-to-face-transaction.png" alt="Physical cash problem illustration" style="background-color: white;" />

<p>Since cash is physical, how do you transfer it online?</p>

<p>By digitizing it…by making it digital.</p>

<p>But if it's digital, that means it can be easily reproduced (digital counterfeit).</p>

<p>So how do you prevent people from spending their digital money twice (or more)?</p>

<p>So that's one problem.</p>

<p>There's another problem.</p>

<img src="https://bpcdn.co/images/2022/02/16212319/digitize-cash-1.png" alt="Digital money problem illustration" style="background-color: white;" />

<p>Molly wants to use cash because she already has some in her wallet. But if she wants to send cash electronically (in digital form), now she has to rely on a financial institution like a bank.</p>

<p>But what if Molly didn't have an account with a bank? Sorry Molly, no cupcakes for you then.</p>

<p>Fortunately, in this story, Molly does have a bank account.</p>

<p>But when we're dependent on such financial institutions, this poses a threat or risk.</p>

<p>For example, let's say the greedy sharks who run the bank love cookies and hate cupcakes.</p>

<p>So the bank, not being a fan of cupcakes, may abuse its power and decide to block Molly's transaction. The bank will not allow any transactions related to cupcakes!</p>

<p>Say what?! Heartless I tell you!</p>

<p>Or the bank may charge extra fees for non-local transactions.</p>

<img src="https://bpcdn.co/images/2022/02/16210226/shark-banker-263x360.png" alt="Bank blocking transactions" style="background-color: white;" />

<p>Or even worse, the bank sees unicorns as evil, along with anybody who does business with unicorns as automatically evil also. So even though Molly is a mermaid, she's seen as "evil" because she's trying to buy cupcakes from a unicorn!</p>

<p>As a result, the bank may freeze Molly's account and now Molly can't even access her money. Molly the Mermaid is locked out!</p>

<p>The bank is holding Molly's money hostage. The bank is the single entity in control of all of her money. Since there is a single entity in charge, this is considered centralized.</p>

<p>"Centralized" means one point or source of control.</p>

<img src="https://bpcdn.co/images/2019/02/26200955/bank-censorship.png" alt="Centralized bank control" style="background-color: white;" />

<p>Molly just wants her cupcake and is frustrated.</p>

<p>"If I were able to use cash, I wouldn't have to go through my bank! Gosh, darn it! This sucks!"</p>

<p>"I wish a digital form of cash existed."</p>

<p>"That I'm in total control of."</p>

<p>"I want to be able to use this digital form of cash just like the cold hard cash in my tail where I can spend it however I want with whoever I want without needing the approval of any person, company, or institution."</p>

<p>So Molly basically wants two big things:</p>

<ul>
<li>Digital money that can be used online like cash…</li>
<li>That is decentralized.</li>
</ul>

<p>Decentralization is the exact opposite of centralization. With decentralization, there is not one single entity in charge.</p>

<p>Decentralized is where control and decision-making is shared among participants.</p>

<p>In terms of money, "decentralization" means that you don't have to go through an intermediary like a bank or other financial institution.</p>

<p>This would give you the freedom to spend digital money any way you please without the risk of your transactions being blocked or your money being frozen or taken away from you.</p>

<p>Molly wants decentralized digital cash.</p>

<p>But this is actually extremely difficult to accomplish!</p>

<p>Let's learn why…</p>
`
        },
        {
          title: "What Problems Did Bitcoin Solve?",
          subtitle: "What makes Bitcoin so revolutionary? Why is it often hailed as a game-changer in the world of money?",
          content: `
<h1>3. What Problems Did Bitcoin Solve?</h1>

<p>As mentioned in an earlier lesson, a mysterious figure who called himself, Satoshi Nakamoto authored a white paper titled, Bitcoin: A Peer-to-Peer Electronic Cash System.</p>

<p>The paper revealed details of creating "electronic cash" (digital currency) free of control from any organization or government.</p>

<p>During Satoshi Nakamoto's research though, he discovered there have been multiple attempts in the past to create a digital currency.</p>

<p>There were early pioneers such as b-money, Bit Gold, ecash, E-gold, Hashcash, Liberty Reserve, and RPOW. But they didn't work out for two main reasons:</p>

<ol>
<li><strong>Centralization.</strong> These digital currencies were controlled by a central authority which introduced a single point of failure. Having centralized control also created other types of risk. An entity in control could decide to do something shady like create secret amounts of additional money for personal use. Or the system gets hacked and users' money gets stolen, or the government forces the entity to shut down which means everybody's money is now worthless.</li>
<li><strong>Double Spending.</strong> There wasn't a foolproof way to know whether the currency was being duplicated or double-spent (the digital version of counterfeiting money).</li>
</ol>

<p>So even before Bitcoin was a twinkle in Satoshi's eye, several attempts have been made to create decentralized electronic money, or digital cash, in the past, but they all failed. 😔</p>

<p>For a while, it seemed impossible.</p>

<p>Unlike a photo, PDF, or other documents, you can't simply attach some money to an email and send it to someone.</p>

<p>Why?</p>

<p>Because whenever you do a transfer of VALUE between two people, you need to make sure that a real transfer has taken place.</p>

<p>For example, let's say you ran into the Gingerbread Man and were able to get a photo of it.</p>

<img src="https://bpcdn.co/images/2022/02/16222811/gingerbread-photo.png" alt="Gingerbread Man photo example" style="background-color: white;" />

<p>You want to buy the photo from me so nobody else can have it.</p>

<p>If I send the original digital photo to you, I can simply attach the photo to a text message and send it.</p>

<p>You will receive the photo.</p>

<p>But now, there are TWO copies of the photo. The one attached to the text message and the original file that I have stored on my computer.</p>

<p>What has happened is that I've sent you a COPY of the file of the photo, not the original file.</p>

<p>When it comes to sending digital photos, this may not be a big deal (unless you're a celebrity who loves to take nude selfies and your phone gets hacked).</p>

<p>But when it comes to sending digital MONEY, this is a very big deal.</p>

<p>Let's return to the cash transaction example involving Molly the Mermaid and Ursula the Unicorn from the previous lesson.</p>

<p>Imagine if Molly scanned her one-dollar bill and named the digital image, "one-dollar.jpg".</p>

<img src="https://bpcdn.co/images/2019/02/26203544/scan-money.png" alt="Digital dollar copy problem" style="background-color: white;" />

<p>When something is in digital form, it's easy to copy and duplicate it…as many times as you want.</p>

<p>Where is the value in that?!</p>

<p>Molly can create an infinite number of digital copies of "one-dollar.jpg" and spend it as many times as she wants.</p>

<p>This issue is known as the "double spend" problem.</p>

<img src="https://bpcdn.co/images/2019/02/26204704/digital-transaction.png" alt="Double spend problem illustration" style="background-color: white;" />

<h2>Electronic Payment</h2>

<p>And if multiple people own the same exact "one-dollar.jpg" image file, then….who is the actual owner?</p>

<img src="https://bpcdn.co/images/2019/02/26205754/double-spending.png" alt="Ownership problem illustration" style="background-color: white;" />

<h2>Digital Money and Ownership</h2>

<p>If you're trying to spend money digitally, how can you prove that the money transferred is really gone from its original place? That there was an actual change in ownership?</p>

<img src="https://bpcdn.co/images/2019/02/26191559/cash-transaction1.png" alt="Digital money ownership" style="background-color: white;" />

<p>If Molly gives Ursula $1, how can Molly prove that she wasn't then going to give the same $1 to somebody else?</p>

<p>When it comes to digital payments, the net value of all transfers needs to be equal to $0. For example, when Ursula sends $1 to Molly, Ursula should lose $1, and Molly should gain $1.</p>

<p>Before Bitcoin, the only way to send money electronically was through a bank or a payment company like PayPal. (And as mobile phone usage grew, fintech mobile apps like Venmo or M-Pesa.)</p>

<p>Basically, we had to rely on a central authority.</p>

<p>Molly starts with $1 in her account, and Ursula has $0.</p>

<img src="https://bpcdn.co/images/2019/02/27123547/bank-payment.png" alt="Bank payment illustration" style="background-color: white;" />

<p>Molly tells the bank to transfer $1 to Ursula.</p>

<p>The bank adjusts Molly's and Ursula's account balances.</p>

<p>Molly's and Ursula's account balances exist as numbers on a computer.</p>

<p>Molly and Ursula trust the bank to keep their bank account balances up-to-date and accurate.</p>

<p>If you noticed, there is no physical cash changing hands.</p>

<p>Instead of the physical $1 bill, Ursula and Molly rely on the bank to do a digital transaction on their behalf.</p>

<h2>What is a ledger?</h2>

<p>The bank keeps track of the accounts of both buyer and seller.</p>

<h2>How does a bank keep track of its account balances?</h2>

<p>The bank uses a ledger.</p>

<img src="https://bpcdn.co/images/2019/02/27125657/bank-ledger.png" alt="Bank ledger illustration" style="background-color: white;" />

<p>The ledger serves two functions:</p>

<ul>
<li>The ledger serves as a method for proving ownership, which is done by reading historical data preserved in the ledger.</li>
<li>The ledger documents any transfer of ownership, which means that new data is produced and written to the ledger.</li>
</ul>

<p>In a traditional bank transaction, when Molly sends a payment to Ursula, the central authority (the bank) looks at the ledger to make sure that Molly has the funds and then decreases Molly's bank account balance and increases Ursula's bank account balance.</p>

<p>Basically, for electronic (non-physical) transfers of money, you need a recordkeeping system.</p>

<p>That's what the ledger does. It keeps a record of transactions.</p>

<p>In this example, the ledger recorded that Molly transferred $1 (unit of currency) to Ursula. And now Molly has $0.</p>

<table>
<thead><tr><th>TO</th><th>FROM</th><th>AMT</th></tr></thead>
<tbody>
<tr><td>Ursula</td><td>Molly</td><td>$1</td></tr>
</tbody>
</table>

<img src="https://bpcdn.co/images/2019/02/27131315/bank-payment-with-ledger.png" alt="Payment ledger example" style="background-color: white;" />

<p>This prevents the double spending problem.</p>

<img src="https://bpcdn.co/images/2019/02/27143438/bitcoin-99-problems.png" alt="Double spending solved by bank" style="background-color: white;" />

<p>For online transactions, without these intermediaries, we could theoretically just "copy and paste" money and it'd be impossible to know which transactions were legit or fraudulent.</p>

<p>While relying on central authorities or intermediaries solves the "double spending" problem, this requires you to TRUST them.</p>

<p>Double spending is the process of making two payments with the same funds in order to deceive the recipient of those funds. With physical currency, this isn't possible. You can't give two people the same $5 bill. With online payments, you must trust a third-party to make sure funds are sent and received properly. Banks, credit card companies, and payment processors validate the transactions themselves and minimize the risk of double spending.</p>

<p>For example, you must trust that your bank maintains your account balances in their ledger accurately and they don't run off with your money or allow governments to confiscate your money.</p>

<p>Your transaction could also potentially be "censored" by the government, where the bank is pressured to block or reject transactions for political or other reasons.</p>

<p>Having to rely on and trust banks and other third parties are known as the centralization problem.</p>

<h2>So to quickly summarize, we currently have two problems with digital money:</h2>

<h3>PROBLEM #1: Double Spending</h3>

<p>The risk of someone being able to spend digital money twice (or more) since anything in digital format can be easily duplicated. This new amount of currency that didn't previously exist is also known as counterfeit or fraudulent money.</p>

<h3>PROBLEM #2: Centralization</h3>

<p>In order to solve the "double spending" problem, you have to rely on a third party to maintain and keep track of the change in ownership of funds. But this exposes you to the risk of your digital money being stolen, confiscated, frozen, or blocked by the third party. You lose control or ownership of your money.</p>

<p>Satoshi Nakamoto figured out how to solve both problems!</p>

<h2>Prevent double spending. Stop relying on central authorities. PROBLEMS SOLVED!</h2>

<img src="https://bpcdn.co/images/2019/02/27142913/bitcoin-problems.png" alt="Bitcoin solves both problems" style="background-color: white;" />

<p>Allowing money to move the way text messages or emails do between any two people and without any central intermediary requires a unique solution.</p>

<p>Satoshi's solution created a NEW way to use money in a digital form that is counterfeit-proof and can be sent directly from one person to another ("peer-to-peer") without having to go through a financial institution.</p>

<p>No more banks or other intermediaries. No more need to ask permission or get approval from them if you want to transfer money.</p>

<p>But how?</p>

<p>How the heck do you prevent double spending of digital money if you do NOT have a central authority, like a bank, maintaining a ledger and keeping track of who owns what?</p>

<p>Who then maintains the accuracy of the ledger?</p>

<p>Well, if you don't want to rely on traditional financial institutions, you have to start from scratch and create a totally new SYSTEM.</p>

<p>If you want to skip the bank entirely, you need a new system for tracking value and the transferring of value from one person to the next.</p>

<p>Not wanting to rely on banks or governments means you can NOT be part of any existing financial system.</p>

<p>Why?</p>

<p>Because the money used in existing financial systems is based on conventional currency, also known as "fiat money" such as dollars, euros, yen, pounds, and pesos. And all of these currencies are controlled by their governments which means they are all CENTRALIZED.</p>

<p>That's exactly what Satoshi Nakamoto wanted to avoid. He didn't want to rely on a central authority or administrator to manage the ledger.</p>

<p>This means that the system needed to be able to be operated by anyone, without the need to gain permission from some kind of gatekeeper.</p>

<p>The Bitcoin God wanted to use digital money that is DECENTRALIZED.</p>

<p>This decentralization would allow it to be a global form of money, meaning money that transcends national boundaries or governments.</p>

<p>It would be able to operate outside of any government regulation and central banks, which means it is not under the control of any single person or organization.</p>

<p>It would be global, state-free money.</p>

<p>This would allow anyone to make online payments to anyone, anywhere in the world at any time.</p>

<p>If this money had a slogan, it would be this:</p>

<blockquote><p>"Regardless of where you live in the world, you can spend your money whenever you want on whatever you want with whomever you want."</p></blockquote>

<p>Nobody, no company, no authority, no government could stop the transaction. (This is also known as being "censorship-resistant".)</p>

<p>Satoshi Nakamoto basically wanted an online currency for the internet that would function just like physical cash ("digital cash"), that could NOT be controlled by anyone.</p>

<p>So what did he do?</p>

<p>He went to work to create a brand new system that would do just that.</p>

<img src="https://bpcdn.co/images/2019/02/27144623/bitcoin-vs-banking-systems.png" alt="Centralized vs Decentralized system comparison" style="background-color: white;" />

<p>This new system would be designed to manage the ownership and creation of its own unit of currency.</p>

<p>This new SYSTEM would allow anybody with an internet connection to send, receive, and store this "digital currency."</p>

<p>This currency would exist independently from any government, central bank, or other financial institution.</p>

<p>This new system would be an alternative to the traditional financial system, which is built around banks.</p>

<p>Since there are no banks, you would not need a bank account. All you would need is a "wallet" which anyone can create. (I'll discuss wallets in a later lesson.)</p>

<img src="https://bpcdn.co/images/2019/02/27155900/fiat-vs-bitcoin1.png" alt="Fiat Currency vs Bitcoin comparison" style="background-color: white;" />

<p>Although many of the concepts and technologies underlying Bitcoin already existed in 2008, no one had ever put all the pieces together.</p>

<p>Satoshi Nakamoto took components from the previous attempts of creating decentralized digital cash and was able to combine them in a new and original way.</p>

<p>This new system was basically a successful Frankenstein of different technical innovations he borrowed from earlier attempts at cryptocurrencies and electronic cash in the decades before Bitcoin was launched.</p>

<p>Satoshi Nakamoto named this system, Bitcoin.</p>

<img src="https://bpcdn.co/images/2022/03/17103252/bitcoin-name.png" alt="Bitcoin system created" style="background-color: white;" />

<h2>Bitcoin vs. bitcoin?</h2>

<p>What's the difference between uppercase "B" and lowercase "b" in Bitcoin?</p>

<p>Bitcoin (capital "B") is the system that automatically manages the ownership and creation of its own digital units of currency called bitcoins (lowercase "b").</p>

<p>As a Bitcoin user, you'd say that you have a certain amount of "bitcoins", similar to how you'd say you have a certain amount of British "pounds", Nigerian "naira", Indian "rupees", or U.S. "dollars".</p>

<p>"BTC" has been the generally accepted currency code for bitcoin. So 1 bitcoin = 1 BTC.</p>

<p>One bitcoin is divisible to eight decimal places. So it's possible to own 0.00000001 BTC.</p>
`
        },
        {
          title: "What is a Distributed Ledger?",
          subtitle: "Understanding distributed ledgers and why they matter for Bitcoin.",
          content: `
<h1>What is a Distributed Ledger?</h1>

<p>What is a distributed ledger?</p>

<p>The first step to understanding how Bitcoin works is to become familiar with the concept of a "distributed ledger".</p>

<p>In the previous lesson, I explained how Bitcoin is a new type of recordkeeping system that Satoshi Nakamoto created to be able to move money around on the internet.</p>

<p>Bitcoin is a new kind of system that creates digital money designed to achieve two major goals:</p>

<ul>
<li>Prevent the double spending problem</li>
<li>Achieve the first goal without a centralized financial institution like a bank.</li>
</ul>

<p>Bitcoin achieves these two goals by using an innovative approach on how it keeps a record of transactions and constantly maintains its accuracy.</p>

<h2>What is a ledger?</h2>

<p>In order to understand Bitcoin's approach, let's review how digital transactions work with a traditional bank.</p>

<img src="https://bpcdn.co/images/2022/02/17110721/online-bank-payment-1.png" alt="Online bank payment" style="background-color: white;" />

<p>In order to prevent double spending, a ledger is needed.</p>

<p>The ledger keeps track of account balances.</p>

<p>Before Bitcoin, this ledger was always stored by a centralized financial institution like a bank.</p>

<p>Let's dig a tad bit deeper into WHY a bank is even needed in the first place.</p>

<p>A cool way to explain this is to show an example that attempts to perform a digital transaction without a bank and see how a potential sh*tshow can occur.</p>

<p>Rather than rely on a bank, what if Ursula and Molly keep their own copy of the ledger on their own computers?</p>

<p>This ledger is simply a text file stored on their computer's hard drive.</p>

<img src="https://bpcdn.co/images/2022/02/17112659/p2p-electronic-payment.png" alt="P2P electronic payment" style="background-color: white;" />

<p>When Molly the Mermaid pays Ursula the Unicorn for her magical cupcakes, they both update their digital ledgers (the text file).</p>

<p>If Ursula and Molly both trust each other and promise to keep their ledgers accurate, then this approach could work.</p>

<p>But what if Ursula and Molly do NOT trust each other?</p>

<p>What if Ursula is shady and edits her ledger to show that she never received payment from Molly and tries to ask for another $1?</p>

<p>Imagine Ursula accusing Molly of not paying and showing proof by taking a screenshot of her ledger and sending it to Ned.</p>

<p>Molly rejects her accusation and claims she is lying and shows proof by sending a screenshot of her ledger that clearly shows that $1 was transferred to her.</p>

<p>Whose ledger is correct?!</p>

<p>This will be a never-ending argument. They will never come to an agreement on who is telling the truth.</p>

<p>This is why you need a trusted third party like a bank.</p>

<p>The bank handles the record-keeping of transactions so all parties can agree on who really owns what.</p>

<p>But we don't want to rely on a bank. We need a different solution.</p>

<p>Here's an idea…</p>

<p>What if they share the ledger with another friend?</p>

<p>So let's add Pablo the Polar Bear.</p>

<img src="https://bpcdn.co/images/2022/02/17122628/pablo-bear.png" alt="Pablo the Polar Bear" style="background-color: white;" />

<p>Now we have a network of three friends, instead of just two.</p>

<p>When Molly pays Ursula, everyone's ledgers get updated at the same time.</p>

<img src="https://bpcdn.co/images/2022/02/17122256/simple-distributed-ledger.png" alt="Simple distributed ledger" style="background-color: white;" />

<p>In this scenario, if Ursula tries to accuse Molly of not paying, by showing her ledger with a $0 balance, it will be different from Molly's and Pablo's ledgers.</p>

<p>Ursula will have a tougher time proving she's right because Molly can ask Pablo to share his screenshot of the ledger with both of them.</p>

<p>Two out of three ledgers show that Ursula has a $1 balance.</p>

<p>Their ledgers do not agree with her ledger.</p>

<p>Seeing that a majority of all ledgers show that Ursula has a $1 balance, Molly and Pablo come to a consensus and agree that their ledgers are the correct ones and Ursula's ledger is incorrect.</p>

<p>Sensing defeat, Ursula confesses that she tampered with her ledger.</p>

<p>Now everybody is in consensus that Molly really did transfer ownership of her $1 to Ursula, which means that Ursula does indeed have a $1 balance.</p>

<p>In hopes that both Molly and Pablo would still buy cupcakes from her in the future and to win back their trust, she deletes her ledger and asks them for a copy of their version of the ledger so all three ledgers are back in sync.</p>

<img src="https://bpcdn.co/images/2022/02/17124944/distributed-ledgers-sync.png" alt="Distributed ledgers sync" style="background-color: white;" />

<p>This is an example of a distributed ledger.</p>

<p>Not just one person holds the ledger, it's distributed across multiple people in different locations.</p>

<p>(Technically, since the ledger is stored on a computer, it's distributed across multiple computers which are owned by the people. 🤓)</p>

<h2>What is a distributed ledger?</h2>

<p>A distributed ledger works because everyone is holding a copy of the SAME ledger. The more trusted people that hold the ledger, the stronger it becomes.</p>

<p>A "distributed ledger" is a ledger that is replicated and stored across multiple locations instead of a single central location.</p>

<p>With a distributed ledger, there is no more need for a bank to keep records. Instead, everyone (collectively) is the bank!</p>

<p>This is the approach that Bitcoin takes.</p>

<p>The core idea behind Bitcoin was to create a single distributed ledger of transactions that is accessible to everyone, where anyone in the world can view balances and submit transactions at any time, but where the ledger is not controlled by any single person, corporation, or government.</p>

<p>In other words, a "distributed ledger" that is "permissionless" and is maintained on a "decentralized" basis.</p>

<p>In reality, this is easier said than done. Let's see why….</p>

<p>In the example above, because they were all friends, Pablo the Panda held a copy of the ledger, even though he wasn't part of the transaction.</p>

<p>Without him though, there would be no agreement on the correct ledger. And shady Ursula might attempt more dishonest transactions.</p>

<p>But what if they weren't friends? Why would Pablo make the effort to store a copy of the ledger on his computer and help validate transactions with no benefit for himself?</p>

<p>While keeping track of transactions on a distributed ledger with just three people on a network is pretty manageable, what if there are thousands of people who want to join the network and send each other money?</p>

<p>You can start to imagine the challenge that arises.</p>

<p>Bitcoin's network is entirely public, and anyone can participate. While a public ledger allows for many more participants. which potentially strengthens the ledger, it also opens itself up to more shady participants trying to corrupt the ledger.</p>

<p>When a lot of people have a copy of the same ledger, it makes it hard to cheat. But it doesn't mean cheaters still won't try.</p>

<p>Within those thousands of people, there are probably going to be a bunch of shady Ursulas so you're going to need a lot of Pablos to ensure an accurate ledger is used by everyone.</p>

<p>What if there were more people like Ursula? What if there were thousands of shady Ursulas editing their ledgers?</p>

<p>Unlike Ursula, Molly, and Pablo who may know and trust each other, with a totally open and public network like Bitcoin's, you pretty much can NOT trust anybody.</p>

<p>So with a distributed ledger, the challenges are this:</p>

<p>How do you incentivize other people who aren't making transactions to hold a copy of the ledger on their computer and constantly check to make sure transactions are accurate and nobody is cheating?</p>

<p>And if you have copies of the same ledger floating around on a thousand different computers and no one is in charge, how do you make sure all copies are identical, are updated synchronously, and reflect only honest transactions?</p>

<p>In other words, how do you get a bunch of people who don't know each other, who don't trust each other to coordinate and come to a consensus on which ledger is accurate and true?</p>

<p>Consensus is defined as a general agreement on the answer to the following question:</p>

<p>"Which version of the ledger does everyone follow?"</p>

<p>With thousands of people all holding their own copy of the ledger, some of which, like Ursula, may have made malicious edits, what is the consensus mechanism needed to get everyone to agree on the "correct ledger" to keep a copy of and follow?</p>

<p>What makes Bitcoin special is how it figured out how to get these thousands of computers to AGREE in real-time which ledger to hold.</p>

<p>Satoshi Nakamoto figured out a technical solution to overcome these challenges of using a distributed ledger and it was considered a game-changer!</p>

<p>In order to understand HOW, we'll need to look under the hood of Bitcoin. In the next lesson, we'll start with a high-level overview of the Bitcoin system.</p>
`
        },
        {
          title: "The Bitcoin System and Its Components",
          subtitle: "A high-level overview of the Bitcoin system and its key components.",
          content: `
<h1>The Bitcoin System and Its Components</h1>

<p>What is Bitcoin?</p>

<p>While "Bitcoin" is usually mentioned as a cryptocurrency, it's more than that.</p>

<p>Bitcoin is actually a system.</p>

<p>Like with any system, the Bitcoin system is a collection of elements or components that work together as a whole.</p>

<p>Let's take a look at the different components of Bitcoin.</p>

<p>The Bitcoin system is basically just a bunch of computers that "talk" to each other over the internet.</p>

<p>To be able to talk to each other, Bitcoin software is installed on each computer.</p>

<img src="https://bpcdn.co/images/2022/02/17163515/bitcoin-computer-360x360.png" alt="Bitcoin computer" style="background-color: white;" />

<p>The Bitcoin software is open source which means anybody can look at the source code.</p>

<p>Open source means that the software is not owned by anyone or any company. It is free to use and modify. Open source software is code that is designed to be publicly accessible. This means that anyone can see, modify, and distribute the code as they see fit.</p>

<p>This software, known as the Bitcoin client, was created by Satoshi Nakamoto in late 2008.</p>

<img src="https://bpcdn.co/images/2022/02/17161907/developer-360x360.png" alt="Developer" style="background-color: white;" />

<p>The original implementation of the software is now known as Bitcoin Core. Satoshi Nakamoto served as the original maintainer of Bitcoin Core until he disappeared in late 2010,</p>

<p>Since then, a bunch of other individuals, called "Core developers" have taken over and now maintain the software.</p>

<p>What does the software do? It runs the Bitcoin protocol.</p>

<p>A protocol is a set of rules or procedures that govern a system. So the Bitcoin protocol is the set of rules that define how the Bitcoin system operates.</p>

<p>For example, there's a rule that specifies a predetermined amount of bitcoins to ever be in circulation. Another example of a rule specifies what determines a transaction to be valid.</p>

<p>This protocol, or rules, can be described in writing, but in Bitcoin's case, are expressed in computer code. This computer code is then compiled into software.</p>

<img src="https://bpcdn.co/images/2022/02/17162517/bitcoin-software-code-360x360.png" alt="Bitcoin software code" style="background-color: white;" />

<p>Compiled just means that the human-readable computer code written by a programmer(s) is translated into computer-executable machine code.</p>

<p>Anybody can download and install this software.</p>

<p>Because Bitcoin Core's code is open source, there are now multiple implementations of Bitcoin's code. But Bitcoin Core remains the most popular, and used as the reference version by other Bitcoin software.</p>

<p>Currently, this software is installed on thousands of computers spread out across the world.</p>

<p>These computers are called Bitcoin nodes.</p>

<p>If the computer ("node") is connected to the internet and starts running the software, it becomes part of the Bitcoin network.</p>

<img src="https://bpcdn.co/images/2022/02/17162643/global-network-360x360.png" alt="Global network" style="background-color: white;" />

<p>Once nodes are connected to the Bitcoin network, they start communicating and sharing information with each other.</p>

<p>All right, let's list out components of the Bitcoin system that's been mentioned:</p>

<ul>
<li>Bitcoin software</li>
<li>Bitcoin protocol</li>
<li>Bitcoin nodes</li>
<li>Bitcoin network</li>
</ul>

<p>We're still missing components, but no worries. all will be covered slowly in later lessons.</p>

<p>For now, let's draw a "map" of the Bitcoin system of what you've learned so far.</p>

<img src="https://bpcdn.co/images/2022/03/15215248/bitcoin-as-a-system-initial.png" alt="Bitcoin as a system" style="background-color: white;" />

<p>The "map" looks pretty small right now but just you wait!</p>

<p>As you learn more concepts, we will see it grow! Be prepared to be amazed! 😎</p>

<p>Let's now learn more about the Bitcoin network.</p>
`
        }
      ]
    },
    am: { title: "የቢትኮይን መመሪያ", description: "ቢትኮይን ምንድነው፣ ከየት እንደመጣ እና እንዴት እንደሚሠራ ይማሩ።", lessons: [] }
  },
  {
    id: 3, icon: "Network",
    en: {
      title: "Beginner's Guide to the Bitcoin Network",
      description: "Learn what the Bitcoin network is, what happens on the Bitcoin network, and why it's important.",
      lessons: [
        {
          title: "What is a Network?",
          subtitle: "Before we dig deeper into the details of the actual Bitcoin network, let's take a step back first and review what a computer network is.",
          content: `
<h1>What is a Network?</h1>

<p>Instead of a governing body or central organization (like a bank) managing transactions, Bitcoin is run by a network made up of thousands of computers running some software that handles the sending and receiving of bitcoins.</p>

<p>This network of computers is called the Bitcoin network.</p>

<p>Before we dig deeper into the details of the actual Bitcoin network, let's take a step back first and review what a "network" is.</p>

<h2>What is a network?</h2>

<p>What's a network? Or more specifically, what's a computer network?</p>

<p>A network is just a bunch of computers linked together allowing them to exchange data with each other.</p>

<p>There are two basic ways a network can be arranged:</p>

<h2>1. Client-Server Network</h2>

<p>The first type of network is known as a "client-server network".</p>

<img src="https://bpcdn.co/images/2022/02/17192841/client-server-network-1.png" alt="Client-Server Network" style="background-color: white;" />

<p>A client-server network is when there is one centralized computer (called the "server") that acts as a hub to which other computers (called "clients") are connected.</p>

<p>Data is requested by computers known as "clients" (such as PCs or even smartphones) and are served by computers called "servers".</p>

<p>This is the type of network configuration used by banks and popular payment apps like PayPal, Venmo, Apple Pay, and Google Pay. In conventional digital banking, your laptop or mobile phone acts as an electronic "client" interacting with a central server operated by your bank.</p>

<p>This "hub-and-spoke" network configuration is highly efficient but it's fragile since the server is a "chokepoint" and becomes a centralized single point of failure ("SPOF").</p>

<p>If the server goes down, the entire network goes down.</p>

<h2>2. Peer-to-Peer Network (P2P)</h2>

<p>The second type of network is known as a "peer-to-peer network".</p>

<img src="https://bpcdn.co/images/2022/02/17193005/p2p-network.png" alt="Peer-to-Peer Network" style="background-color: white;" />

<p>Where's the "server"? There is none.</p>

<p>Instead of "servers" and "clients", computers are simply known as "nodes" since they can function as both client AND server.</p>

<p>A peer-to-peer network, also known as a P2P network, is created when two or more computers are connected and exchange data with each other without going through a separate "server" computer.</p>

<p>In a P2P network, computers are able to "talk" to each other directly.</p>

<p>Instead of a "hub-and-spoke" configuration, a P2P network is structured like a "spider web".</p>

<p>A popular example of a P2P network is the internet itself.</p>

<p>For folks with a tad bit of gray hair, you may have remembered a famous music-sharing software called Napster. Napster deserves credit for popularizing the use of software that runs on a P2P network. BitTorrent is another one.</p>

<h2>Characteristics of a Peer-to-Peer Network</h2>

<ul>
<li>Everyone is connected to each other, so it's a network.</li>
<li>Everyone on the network is equal, so they are all considered peers.</li>
</ul>

<p>Each peer is equal to the others, and each peer has the same rights and duties as the others. Peers are both clients AND servers at the same time.</p>

<p>What the heck does this have to do with Bitcoin?</p>

<p>Remember…Bitcoin runs on a computer network which is known as the Bitcoin network.</p>

<p>And it's configured as a peer-to-peer (P2P) network!</p>

<p>Why is this important?</p>

<p>In the next lesson, I'll explain why. 🤔</p>
`
        },
        {
          title: "What is the Bitcoin Network?",
          subtitle: "What is the Bitcoin network? And how is it formed?",
          content: `
<h1>What is the Bitcoin Network?</h1>

<p>What is the Bitcoin network?</p>

<p>The Bitcoin network is a peer-to-peer (P2P) network.</p>

<p>From the words of the Bitcoin God himself:</p>

<blockquote><p>"A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution."</p></blockquote>

<p>The Bitcoin network is made up of computers running the Bitcoin software (also known as a Bitcoin client).</p>

<p>The software running is what makes the whole thing work.</p>

<img src="https://bpcdn.co/images/2022/02/17193409/bitcoin-client-on-network.png" alt="Bitcoin client nodes" style="background-color: white;" />

<p>Any computer on the Bitcoin network can "talk" with each other directly.</p>

<p>This is different from a client-server network where every computer on the network must first go through a central server.</p>

<img src="https://bpcdn.co/images/2022/02/17193555/bitcoin-client-on-network-realistic.png" alt="Bitcoin P2P network realistic" style="background-color: white;" />

<p>In the real world, P2P networks don't look as pretty and organized as above. Not every computer can connect directly with each other because….the world is too big.</p>

<p>So let's keep it real….</p>

<h2>Centralized vs. Decentralized Network</h2>

<p>Since there is no central server in a P2P network, it is a decentralized network.</p>

<p>A decentralized network consists of "peers" that can run independently of each other.</p>

<img src="https://bpcdn.co/images/2022/02/22125958/decentralized-vs-centralized-network.png" alt="Centralized vs Decentralized Network" style="background-color: white;" />

<p>Why does this matter?</p>

<p>There are two main reasons:</p>

<h2>1. No Central Point of Failure</h2>

<img src="https://bpcdn.co/images/2022/02/17193858/central-point-of-failure-360x341.png" alt="No Central Point of Failure" style="background-color: white;" />

<p>If one computer goes down, the network continues to run like it never existed. This is different from a centralized network.</p>

<p>In a centralized network configuration, like the client-server network, if the central server goes down, the entire network goes down with it.</p>

<p>This means that the Bitcoin network can not be shut down. Because there is no "server" to take down.</p>

<p>Each computer on the Bitcoin network is independent. If one fails, the network will still run successfully.</p>

<h2>2. Decentralized Consensus</h2>

<img src="https://bpcdn.co/images/2022/02/17193947/decentralized-consensus.png" alt="Decentralized Consensus" style="background-color: white;" />

<p>When using electronic money to make a payment, like with a bank transfer from your checking account, your transaction has to go through a trusted "middleman" or third party to settle the transaction by deducting funds from one account and adding them to another.</p>

<p>If this middleman settles the transaction, then the transaction is considered valid.</p>

<p>If I transferred you some money, you and I agree the money has actually transferred from my account to yours because we relied on a trusted intermediary or central authority…..the bank. So in this case, "consensus" on whether the transaction is valid requires centralization.</p>

<p>Bitcoin is different. It uses decentralized consensus.</p>

<p>The idea is that instead of relying on an intermediary, ALL the computers on the Bitcoin network have to come to an agreement by "consensus" on which transactions are valid.</p>

<p>Basically, the middleman is replaced by a network of computers.</p>

<p>HOW all of these computers actually come to a consensus will be explained in a later lesson.</p>
`
        },
        {
          title: "What Does the Bitcoin Network Do?",
          subtitle: "Learn how the Bitcoin network is formed and what actually happens on the network.",
          content: `
<h1>What Does the Bitcoin Network Do?</h1>

<p>For now, let's take a look at how the Bitcoin network works.</p>

<p>As mentioned in the previous lesson, the Bitcoin network is made up of computers running the Bitcoin software. These computers or "machines" are known as Bitcoin nodes.</p>

<p>Bitcoins nodes basically gossip. They love to talk to each other.</p>

<p>But instead of talking about recent drama from the Kardashians, they communicate about what's going on around the network.</p>

<p>This is done by sending each other messages.</p>

<img src="https://bpcdn.co/images/2022/02/17194831/bitcoin-network-message.png" alt="Bitcoin network message" style="background-color: white;" />

<p>In Bitcoin's case, each message contains information about a new transaction.</p>

<p>Nodes form a network by connecting and sharing transactions with one another.</p>

<img src="https://bpcdn.co/images/2022/02/17194943/bitcoin-network-message-propogate.png" alt="Nodes sharing transactions" style="background-color: white;" />

<p>This sharing of information ("transaction data") is what allows all the computers on the network to stay up-to-date, which is pretty important if you want to run a digital currency on the internet.</p>

<h2>Who is part of the Bitcoin network?</h2>

<p>Any computer that is running a Bitcoin client software is part of the network.</p>

<p>Got an active Internet connection? Then you can join. Anybody can join the Bitcoin network!</p>

<p>Aside from an internet connection, you'll just need to download and install the software (Bitcoin client) and let the application run on your computer all day long.</p>

<p>Once it's up and running, the computer will be known as a Bitcoin "node" on the Bitcoin network.</p>

<p>There are no jocks or mean girls who will bully you and try to keep you out. Got a Bitcoin client software up and running on your computer? Welcome to the cool club. You now got node status yo.</p>

<p>In computer geek lingo, a "client" is a piece of hardware or software that connects to a server.</p>

<p>For example, an internet browser like Google Chrome or Apple Safari is a "client" since it connects to a website's server to request its content.</p>

<p>In the context of Bitcoin, a client is a software that connects to other clients in a peer-to-peer manner.</p>

<p>Because all these clients talk to each other, they form a network where each client is a node. There is no Bitcoin "server" for Bitcoin clients to connect to. Every Bitcoin client is, at the same, a server also.</p>

<p>To avoid confusion, this is why the term "node" is typically used in place of "client".</p>

<img src="https://bpcdn.co/images/2022/02/17195207/bitcoin-network-of-nodes.png" alt="Nodes network diagram" style="background-color: white;" />

<h2>The Bitcoin Network</h2>

<p>The Bitcoin network is just a bunch of connected nodes from all over the globe. And there are over 15,000 of them!</p>

<h2>Geographical Distribution of Bitcoin Nodes</h2>

<p>Here's a map showing the geographical distribution of Bitcoin nodes:</p>

<img src="https://bpcdn.co/images/2022/03/02094729/map-bitcoin-nodes-1-780x471.jpg" alt="Geographical Distribution of Bitcoin Nodes" style="background-color: white;" />

<p>When you read Bitcoin (and other cryptocurrencies) described as being "managed by peer-to-peer networks of computers running software," this is what they mean.</p>

<p>Think of the Bitcoin network as a leaderless network of independent computers ("nodes") that operate autonomously based on the Bitcoin software.</p>
`
        },
        {
          title: "What is a Bitcoin Node?",
          subtitle: "What exactly is a Bitcoin node? What does a Bitcoin node do? How does a Bitcoin node work?",
          content: `
<h1>What is a Bitcoin Node?</h1>

<p>The Bitcoin network is a peer-to-peer (P2P) network of "nodes".</p>

<p>In previous lessons, you learned what a network does and what a P2P network is.</p>

<p>But what exactly is a Bitcoin node? What does a Bitcoin node do?</p>

<p>How does a Bitcoin node work?</p>

<h2>A Bitcoin node</h2>

<p>A Bitcoin node, or more specifically, a Bitcoin "full node", is simply a computer that runs the Bitcoin software (known as a "Bitcoin client" or "Bitcoin client software").</p>

<p>It could be a desktop PC or laptop as long as it has enough hard drive storage to store historical data.</p>

<img src="https://bpcdn.co/images/2022/02/17205530/computer-as-bitcoin-node.png" alt="Bitcoin node" style="background-color: white;" />

<p>The terms "node" and "full node" are often used synonymously, but there's actually a difference between the two. That's because there are two types of nodes: "full node" and "light node" (or "lightweight node"). Full nodes form the backbone of the Bitcoin network, while light nodes depend on full nodes for functioning. Since light nodes can't function on their own, I consider them more as a "barnacle" or a "parasite" since they need to attach themselves to a full node. Going forward, unless specified, when I use the word "node", I mean "full node".</p>

<h2>What does a Bitcoin node do?</h2>

<p>A node does three things:</p>

<ol>
<li>Follow rules</li>
<li>Share information</li>
<li>Keep a copy of confirmed transactions</li>
</ol>

<h2>1. Follow Rules</h2>

<p>Each node (a computer running the Bitcoin software) has been programmed to follow a set of rules.</p>

<p>This is called the Bitcoin protocol.</p>

<p>A protocol is a set of predefined rules that dictates how the network operates, and that all network participants must abide by in order for the network to function.</p>

<p>Each Bitcoin node is autonomous. If you have a computer that runs a Bitcoin client, the network doesn't "tell you what to do". Instead, the Bitcoin client already knows what to do, and it makes its own decisions based on the Bitcoin protocol (rules).</p>

<p>Because the rules are predefined and coded into the Bitcoin software, this prevents any disagreement on the Bitcoin network.</p>

<p>By following these rules, a node is able to check the transactions it receives and only relay them if everything is legit.</p>

<p>If there are any problems, the transaction isn't passed on.</p>

<img src="https://bpcdn.co/images/2022/02/17195723/bitcoin-transaction-validation.png" alt="Good and bad transactions" style="background-color: white;" />

<p>A transaction that does not follow the rules will be rejected by the P2P network of computers.</p>

<p>For example, one rule is that a person must own an equal or greater amount of bitcoins than they are trying to send.</p>

<p>If your node receives a transaction where someone has tried to send more bitcoins than they own, the transaction won't be passed on to other nodes.</p>

<p>If any member of the Bitcoin network attempts to broadcast false information, all nodes on the network will immediately recognize it as invalid and reject it.</p>

<p>Because each and every node can verify all information on the network itself, there is no need to trust other members of the network. This makes Bitcoin a trustless system.</p>

<h2>2. Share information</h2>

<p>The primary job of a node is to gossip….to share information with other nodes.</p>

<p>This "information" a node shares are transactions.</p>

<p>There are TWO types of transactions that nodes share:</p>

<p>Fresh transactions: transactions that have recently entered the network.</p>

<p>Confirmed transactions: transactions that have been "confirmed" and written to a file. These transactions are not shared individually but are first packaged into BLOCKS before they are shared.</p>

<img src="https://bpcdn.co/images/2022/02/17201845/fresh-vs-confirmed-bitcoin-transactions-1.png" alt="Fresh vs confirmed transactions" style="background-color: white;" />

<p>A node shares both "fresh" transactions and blocks of "confirmed" transactions.</p>

<h2>What's a block?</h2>

<p>Let's pretend you go to your local coffee shop and after you pay, you get a receipt that signifies a "transaction" with the barista. You really love going to this coffee shop and after multiple visits, you now have a stack of receipts. You bundle them together. That's a "block".</p>

<p>So in Bitcoin, transactions that are bundled together is called a "block".</p>

<p>Don't worry too much about blocks or the differences between fresh and confirmed transactions right now. It will all become clear in later lessons.</p>

<h2>3. Keep a copy of confirmed transactions</h2>

<p>As mentioned above, each node also keeps blocks of "confirmed" transactions.</p>

<p>These are held together in a file called the "blockchain".</p>

<h2>What's a chain?</h2>

<p>For the purposes of this lesson, a "chain" just means that when you create a new block (another bundle of transactions), you hook it onto the previous block. And once hooked, it's permanent. You can't "unhook" it.</p>

<p>It's forever attached to that previous block. So using the coffee shop example I mentioned earlier, imagine a chain of multiple bundles of receipts…that's a "chain of blocks" or a blockchain.</p>

<img src="https://bpcdn.co/images/2022/02/17202107/bitcoin-node-stores-blockchain-1.png" alt="Blockchain chain" style="background-color: white;" />

<p>Fresh transactions travel around the network until they are added to the blockchain, which is just a ledger of confirmed transactions.</p>

<p>There is no single blockchain. Every node has its own copy of the blockchain.</p>

<p>All nodes do their best to stay in sync. If some nodes have outdated copies of the blockchain, other nodes who have the most recent copy of the blockchain will share their copy with them.</p>

<p>The cool thing about each node having its own copy of the blockchain is if one (or more) nodes go offline, the Bitcoin network can continue to still operate! The more nodes that are running, the more difficult it is to shut down Bitcoin.</p>

<p>The network is NOT dependent on any single node. There is no central point of failure. In order to actually kill Bitcoin, every single copy of the blockchain must be destroyed.</p>

<p>Every node is independent. Nodes (computers) can leave and rejoin the network at will.</p>

<p>If a node disconnects from the network and returns, the computer will just download the freshest copy of Bitcoin's blockchain and it becomes a node again.</p>

<p>Nodes are a critical part of the Bitcoin system. Without nodes, there is no Bitcoin network.</p>

<p>And without the Bitcoin network, there is no blockchain since nodes are needed to store copies of the blockchain.</p>

<p>And with no blockchain, there is no Bitcoin system.</p>

<h2>Summary</h2>

<p>So far, you've learned that the Bitcoin network is:</p>

<ul>
<li>a leaderless peer-to-peer network of nodes (computers running Bitcoin software),</li>
</ul>

<p>in which every node independently checks that all rules are being followed,</p>

<p>verifies fresh transactions and</p>

<p>stores a copy of the blockchain (the ledger of confirmed transactions).</p>

<p>Because every node is doing the same work, there is no central point of failure. There is no centralized server.</p>

<p>In order for fresh transactions to be ADDED to the blockchain, they go through a process called "mining" which is done by a special type of node known as "miners".</p>

<p>But in order to learn how Bitcoin mining works, we need to take a quick detour.</p>
`
        }
      ]
    },
    am: { title: "የቢትኮይን ኔትወርክ መመሪያ", description: "የቢትኮይን ኔትወርክ ምንድነው ይማሩ።", lessons: [] }
  },
  {
    id: 4, icon: "Hash",
    en: {
      title: "Beginner's Guide to Hashing",
      description: "In order to truly understand how Bitcoin and other cryptocurrencies work, it's crucial to first understand the concept of \"hashing\".",
      lessons: [
        {
          title: "What is Hashing?",
          subtitle: "In order to truly understand how Bitcoin and other cryptocurrencies work, it's crucial to first understand the concept of \"hashing\".",
          content: `
<h1>What is Hashing?</h1>

<p>Before diving into the subject of Bitcoin mining, we need to take a quick detour and learn about a certain concept that's foundational to cryptocurrencies.</p>

<p>In order to truly understand how Bitcoin and other cryptocurrencies work, it's crucial to first understand the concept of "<strong>hashing</strong>".</p>

<p>When you see the word, "hash", some folks might think of hash browns, a popular American breakfast food, while other folks like Snoop Dogg, might think of the cannabis concentrate product. 🌿</p>

<img src="https://bpcdn.co/images/2022/08/11120630/not-hashing.png" alt="Wrong kind of hash" style="background-color: white;" />

<p>In this lesson, I will be talking about <strong>a different kind of hash</strong>!</p>

<p>It's a technical concept, but one you must be familiar with so I will break it down for you nice and easy.</p>

<p>Being familiar with the concept of hashing is also needed to <strong>understand how Bitcoin mining works</strong> (which is the next guide) so <strong>please don't skip over these lessons</strong>. 👁️</p>

<h2>What is hashing?</h2>

<p><strong>Hashing</strong> is a method of cryptography that converts any form of data into a unique string of text of fixed length.</p>

<p><strong>Cryptography</strong> is the practice and study of techniques for secure communication from outside observers. In the internet era, cryptography is used to protect computer information or "data".</p>

<p>If it wasn't already obvious, the "crypto" in cryptocurrencies stands for <em>cryptography</em>.</p>

<p><strong>Hashing is a fundamental part of cryptography</strong>. And plays a huge role behind the "crypto" in cryptocurrencies.</p>

<p>In simple terms, hashing means <strong>inputting text</strong> of ANY length through a <strong>hash function</strong> which produces an <strong>output of a FIXED length</strong>.</p>

<img src="https://bpcdn.co/images/2022/02/14151523/hahs-function.png" alt="Hash Function" style="background-color: white;" />

<p>Any piece of data can be "<strong>hashed</strong>", no matter its size, type, or length.</p>

<p>The hash that is produced is <strong>always the same length</strong>.</p>

<p>In the examples below, using the SHA-1 hash function, regardless of the length of the "input", the "output" is always <strong>40 characters long</strong>.</p>

<img src="https://bpcdn.co/images/2022/02/14152139/hashing-example-hello.png" alt="Hashing Example - Hello" style="background-color: white;" />

<img src="https://bpcdn.co/images/2022/02/14152638/hashing-example-babypips.png" alt="Hashing Example - BabyPips.com" style="background-color: white;" />

<img src="https://bpcdn.co/images/2022/02/14152657/hashing-example-i.png" alt="Hashing Example - i" style="background-color: white;" />

<p>Here's a quick comparison of the three examples:</p>

<table>
<tr><th>Input</th><th>Hash</th></tr>
<tr><td>Hello</td><td>f7ff9e8b7bb2e09b70935a5d785e0cc5d9d0abf0</td></tr>
<tr><td>BabyPips.com</td><td>8c8780d0b70c5ef42a534846cc042629cf07a440</td></tr>
<tr><td>I</td><td>ca73ab65568cd125c2d27a22bbd9e863c10b675d</td></tr>
</table>

<p>Notice that even though the "inputs" varied, all three hashes were still <strong>40 characters long</strong>.</p>

<p>In this specific example, the fixed length is 40 characters long, which is determined by the specific <strong>hash function</strong> used ("SHA-1"), which will be explained later.</p>

<p>For now, just know that <em>other</em> hash functions may output different fixed lengths. Most have fixed lengths that are longer than 40 characters.</p>

<h2>A hash acts as a digital fingerprint.</h2>

<p>A unique piece of data will always produce the same hash.</p>

<p>For example, if you run "Hello" a million times through a hash function, the above hash is what will appear a million times.</p>

<p>For the word, "Hello", its SHA-1 hash will always be:</p>

<p><code>f7ff9e8b7bb2e09b70935a5d785e0cc5d9d0abf0</code></p>

<p>And only "Hello" will ever produce that hash.</p>

<p>Any change to "Hello" even if it's just changing it to "hello" and the hash function will produce a <strong>totally different</strong> hash value.</p>

<p>This is why hashes are known as digital "<strong>fingerprints</strong>".</p>

<p>Just like your fingerprint is unique to you, a hash is unique to a specific input of data.</p>

<img src="https://bpcdn.co/images/2022/03/24214236/fingerprint.png" alt="A hash is like a fingerprint" style="background-color: white;" />

<h2>A hash can't be reversed.</h2>

<p>The INPUT into a hash function is called a "<strong>preimage</strong>". But to keep things simple, I just stick with "input".</p>

<p>The OUTPUT of the hash function is called "<strong>hash value</strong>" or "<strong>digest</strong>" or simply as a "<strong>hash</strong>".</p>

<p>A hash function is designed to act in a <strong>one-way manner</strong>.</p>

<img src="https://bpcdn.co/images/2022/02/14153349/hashing-example-irreversible.png" alt="Hash Function is One-Way" style="background-color: white;" />

<p>Since a hash function is a one-way function, the output, the "hash", can't be used to reveal the input, the "preimage".</p>

<p>This means that if all you see is the hash, you will NOT be able to decipher the original data (the "preimage") that the hash represents.</p>

<p>Hash functions produce <strong>irreversible hashes.</strong></p>

<p><strong>Irreversible</strong> means that if you only had the hash you couldn't use that to figure out what the original piece of data was. This allows the original data to remain <strong>secure and unknown</strong>.</p>

<h2>What is a hash function?</h2>

<p>A <strong>hash function</strong> is a <strong>mathematical operation</strong> that converts input data of <em>arbitrary</em> length into an output of <em>fixed</em> length that is executed using a certain <strong>algorithm</strong>.</p>

<p>An <strong>algorithm</strong> is just a step-by-step set of instructions for performing calculations that are done by a software program.</p>

<p>It doesn't matter if the input is a single letter, a word, a full sentence, a page from a book, or an entire book. That's the <em>arbitrary</em> part. Each input will produce a unique output expressed as an alphanumeric string of <em>fixed</em> length.</p>

<p>Alphanumeric just means that something consists of both letters and numbers.</p>

<p>A useful hash function <strong>conceals any clues about what the input may have looked like</strong>.</p>

<p>For example, it needs to be impossible to determine whether the input was long or short or contained numbers or letters. Also, changing just one character in the input should result in a radically different output.</p>

<h3>Popular Hash Functions</h3>

<p>All hash functions work in a similar manner. You input data, and the hash function "scrambles" the data and outputs a hash.</p>

<p>Common hash functions include:</p>

<p><strong>MD-5:</strong> Message Digest 5 (MD5) is a common hash function. In the past, it was considered secure but nowadays, hackers have discovered how to decode the algorithm and are able to do so in seconds.</p>

<p><strong>SHA:</strong> Secure Hash Algorithm (SHA) is another type of hash function. There are several variations of SHA grouped into four <em>families</em>: SHA-0, SHA-1, SHA-2, and SHA-3. In general, the higher the number, the more recent the release and the more secure the algorithm.</p>

<h3>SHA-2 Family</h3>

<p>For our purposes, the only hash function you need to know about right now is the <strong>Secure Hash Algorithm (SHA)</strong>. More specifically, the SHA-2 family since it contains a special member in the family named <strong>SHA-256</strong>.</p>

<p>SHA-256 is a hash function that converts a string of text into another string that is always the same length: 64 alphanumeric characters long. This is equivalent to 256 bits, which is where the "256" in its name comes from.</p>

<p>It's special because it's the hash function used in several parts of the Bitcoin system, which you'll learn about in later lessons. For now, it's important to just know that <strong>SHA-256 is a type of hash function and the one used by Bitcoin</strong>.</p>

<p>Whether the input is a page from a Harry Potter book or the <em>entire</em> series of Harry Potter books, the output of the SHA-256 hash function will always be the SAME length displayed as <strong>64 alphanumeric characters</strong>.</p>

<p>Let's now take a look at how hashing works in crypto.</p>
`
        },
        {
          title: "How Does Hashing Work?",
          subtitle: "Hashing is a mathematical operation that is easy to perform, but extremely difficult to reverse. Learn how it all works.",
          content: `
<h1>How Does Hashing Work?</h1>

<p>In the previous lesson, I introduced the concept of hashing and relevant terms. Now, let's learn how it works!</p>

<p>Hashing is a mathematical operation that is <strong>easy to perform</strong>, but <strong>extremely difficult to reverse</strong>.</p>

<p>The hashing process turns a piece of data into binary code, which is just a <strong>bunch of 0s and 1s</strong>.</p>

<p>Then it breaks up the numbers and applies some secret "<strong>jumbling</strong>", which is done by something called the "hash function".</p>

<h2>How does hashing work in crypto?</h2>

<p>When used in Bitcoin and other cryptocurrencies, the end result is typically a <strong>64-digit long string of numbers and letters</strong>.</p>

<p>Because the conversion is done by a cryptographic algorithm (the "hash function"), the jumbling formula is unknown so the 64-digit string can't be reversed.</p>

<img src="https://bpcdn.co/images/2022/02/14154523/hashing-concept.png" alt="Hashing Concept" style="background-color: white;" />

<p>A <strong>string</strong> is a sequence of characters.</p>

<p>Strings are like sentences. They are formed by a combination of characters.</p>

<img src="https://bpcdn.co/images/2022/02/14154836/hashing-string.png" alt="String" style="background-color: white;" />

<p>Think of a hash as a bunch of <strong>random letters and numbers</strong>.</p>

<h2>A unique piece of data will always produce the same hash.</h2>

<p>For example, every time the string above is run through the hash function, it will <strong>always</strong> produce the same hash.</p>

<p>But what happens if we make just a <strong>tiny change</strong> to the string? (Highlighted in yellow.)</p>

<img src="https://bpcdn.co/images/2022/02/14155150/hashing-string-slight-change.png" alt="String Change" style="background-color: white;" />

<p>The sentence ends with a <strong>question mark</strong> instead of a period.</p>

<p>Even though it was a TINY change in the sentence, the hash is TOTALLY different.</p>

<p>You can see how using hashes can be used to <strong>detect tampering</strong> since even a small change to that input to the hash function results in a totally different output.</p>

<p>It's very important you remember this point because, in a later lesson, you'll see how this is used to prevent previous transactions from being tampered with.</p>

<h2>The hash function is ONE-WAY only.</h2>

<img src="https://bpcdn.co/images/2022/02/14155714/hashing-one-way-function.png" alt="The hash function is ONE-WAY only" style="background-color: white;" />

<p>You can't take an existing hash and try to reverse it to find the input string.</p>

<p>So if all you know is the hash, <strong>there's no way to know what the original input is</strong>. You can't "reverse engineer" or hack the hash.</p>

<p>Lastly, the <strong>length</strong> of the output (the "hash") does NOT grow with an increase in information in the input. A hash function takes input data of ANY length and returns a value that has a FIXED length.</p>

<img src="https://bpcdn.co/images/2022/02/14155918/hashing-harry-potter.png" alt="Hash Output is Fixed" style="background-color: white;" />

<p>If you put the entire text of a Harry Potter book, which has over 76,000 words, the hash output will STILL only be 64 characters long.</p>

<p>And again, if you misspell <strong>even a single letter</strong> in the Harry Potter book, and ran it through the hash function, it would produce a <strong>totally different hash</strong> from above.</p>

<p>This would allow you to instantly know that the book had been modified without you having to manually inspect the entire book! Pretty neat huh?</p>
`
        },
        {
          title: "Examples of Hashing",
          subtitle: "Let's look at some examples of hashing and see how the hashing process works using an actual hash function.",
          content: `
<h1>Examples of Hashing</h1>

<p>So far, in earlier lessons, you've learned what hashing is and how hashing works.</p>

<p>But in order to truly understand just what these specialized programs do, it's helpful to see actual examples in <strong>action</strong>!</p>

<img src="https://bpcdn.co/images/2022/04/05164602/see-hashing-in-action-360x360.png" alt="See how hashing works!" style="background-color: white;" />

<p>Let's see how the hashing process works using an actual <strong>hash function</strong>.</p>

<p>Since <strong>SHA-256</strong> is the chosen hash function of Bitcoin, let's use it for our example.</p>

<h2>1. Example Input</h2>

<p>This is our first example input:</p>

<p><code>BabyPips.com is cool as ice.</code></p>

<p>When put through the SHA-256 hash function, this sentence creates the following hash value, also known as a "<strong>digest</strong>" or simply as a "<strong>hash</strong>":</p>

<p><code>A58E12FAC905B8F84EA2F64F888191A4B66A67CC45F8E7B7B0F94C37A134CB57</code></p>

<p>You can see that the digest is a combination of letters and numbers. And it is exactly 64 characters in length.</p>

<p>Aside from that, there's really not much else you can learn from looking at this digest. There are no patterns or clues as to what the input is. It just looks like a bunch of gibberish.</p>

<p>The output may seem random. But there's no way you could guess the input just by looking at the output.</p>

<p>If you run the input through the SHA-256 hash function again, you will get the exact same output ("hash") again.</p>

<p><strong>The same input will ALWAYS produce the same output.</strong></p>

<p>Now, let's make one subtle change to the first example's input and see what happens:</p>

<p><code>BabyPips.com is cool as lice.</code></p>

<p>Notice that the letter "l" has been added to the beginning of the word "ice" to spell "lice".</p>

<p>Here's the new digest:</p>

<p><code>B8784EAEB1FC50719B2041FB1AEE30FF91516529CCB65B4B446CC4D5F6B4EB95</code></p>

<p>Now let's compare the two:</p>

<table>
<tr><th>Input</th><th>Digest</th></tr>
<tr><td>BabyPips.com is cool as ice.</td><td>A58E12FAC905B8F84EA2F64F888191A4B66A67CC45F8E7B7B0F94C37A134CB57</td></tr>
<tr><td>BabyPips.com is cool as lice.</td><td>B8784EAEB1FC50719B2041FB1AEE30FF91516529CCB65B4B446CC4D5F6B4EB95</td></tr>
</table>

<p>You can see that this is a radically different result from the first digest!</p>

<p>Even though the inputs were practically identical, changing a single character generated a completely <strong>different output</strong>.</p>

<img src="https://bpcdn.co/images/2022/03/24170642/lice-is-cool-360x360.png" alt="Lice is so cool" style="background-color: white;" />

<p>Lice are pretty disgusting so let's make one more change to the input:</p>

<p><code>BabyPips.com is cool as rice.</code></p>

<p>Now let's see what happens:</p>

<p><code>FCA7032BE8CF7F3C0DD75B8DEB77412E452EA5E2275BAA4125123CD639ED2C9A</code></p>

<p>A totally different input once again!</p>

<p>Now let's compare all three:</p>

<table>
<tr><th>Input</th><th>Digest</th></tr>
<tr><td>BabyPips.com is cool as ice.</td><td>A58E12FAC905B8F84EA2F64F888191A4B66A67CC45F8E7B7B0F94C37A134CB57</td></tr>
<tr><td>BabyPips.com is cool as lice.</td><td>B8784EAEB1FC50719B2041FB1AEE30FF91516529CCB65B4B446CC4D5F6B4EB95</td></tr>
<tr><td>BabyPips.com is cool as rice.</td><td>FCA7032BE8CF7F3C0DD75B8DEB77412E452EA5E2275BAA4125123CD639ED2C9A</td></tr>
</table>

<p>It's worth emphasizing that literally any input can be put into a hash function.</p>

<p>Regardless of the length of the input, <strong>the output will always be the same fixed length and it will always appear completely random</strong>.</p>

<h2>Try it out!</h2>

<p>Create your own SHA-256 hash.</p>

<p>Try making <strong>one tiny change</strong> to what you type in and notice how vastly different the hash is.</p>

<p>Isn't that neat?! 🤓</p>

<p>Congratulations! You've created your own hashes! 👏</p>
`
        },
        {
          title: "What Is Hashing Used For?",
          subtitle: "What is the purpose of hashing? What exactly is hashing used for?",
          content: `
<h1>What Is Hashing Used For?</h1>

<h2>What is the purpose of hashing?</h2>

<p>The main purpose of hashing is to <strong>verify the integrity of a piece of data</strong>.</p>

<p>Since the hash generated is UNIQUE to the input data, it acts as a unique "<strong>fingerprint</strong>" of the input data.</p>

<p>This makes a hash useful for verifying the integrity of data sent through insecure communication channels like the internet. <strong>Data integrity just means that the data has not been altered in an unapproved way.</strong></p>

<p>The hash value of received data can be compared to the hash value of data <em>before</em> it was sent to determine whether the data was altered.</p>

<p>If I post both the message and the hash value I generated from it, you can generate a hash value from the message that you received and compare the hash values.</p>

<p>Using a very <em>simple</em> example, let's say we're about to meet up for lunch, and right before I head out the door, I remember our last time together…</p>

<img src="https://bpcdn.co/images/2022/06/13144008/body-odor-360x360.png" alt="Body odor" style="background-color: white;" />

<p>While your personality was really nice, your smell was not nice at all. 😬</p>

<p>So I want to send you a message, "<strong>Please wear deodorant.</strong>"</p>

<p>But before I send this, I run it through a hash function (SHA-256). The hash is:</p>

<p><code>33ebb528eab107766343d0ac591952bb68ee959d45b7a8b399628e662f3bc1ef</code></p>

<p>I send you this hash <em>first</em>.*</p>

<p>THEN I send you the actual text message.</p>

<p>Once you receive my message, you think, "WTF? Did he really just say that to me? Or was the message intercepted during transit and the original message was altered?"</p>

<img src="https://bpcdn.co/images/2022/06/06223327/armpit.png" alt="Armpit stinks" style="background-color: white;" />

<p>So you run the message through the <strong>same hash function</strong>.</p>

<p><code>33ebb528eab107766343d0ac591952bb68ee959d45b7a8b399628e662f3bc1ef</code></p>

<p>You then compare your hash versus the hash that came before the text message.</p>

<p>If both hash values are the same, then this proves that:</p>

<ol>
<li>The message was sent correctly.</li>
<li>That your armpits really do stink!</li>
<li>The message has not been deliberately altered by someone between me sending it to you and you receiving it.</li>
</ol>

<p>Of course, in the real world, it is our <strong>computers</strong> that do all this for us.</p>

<p>And hopefully, you keep your armpits smelling fresh. 😅</p>

<p>*Technically, before I send you the hash, it should be protected in some way, but I wanted to keep the example simple. How the hash stays protected during transit will be covered in a later lesson.</p>

<h2>Real-World Example of Hashing: Online Passwords</h2>

<p>This might surprise you, but you probably encounter hashing in your daily life….whenever you log in to check your email. 📧</p>

<img src="https://bpcdn.co/images/2022/08/11125628/use-hashsing-to-login-email-284x360.png" alt="Email uses hashing" style="background-color: white;" />

<p>When you create an email address and password, your email provider likely does not save your actual password.</p>

<p>Instead, your email provider runs the password through a hash function and <strong>saves the <em>hash</em> of your password</strong>.</p>

<p>Every time you attempt to log in to your email account, your email provider <strong>hashes the password YOU enter</strong> and <em>compares</em> this hash to the hash it has saved.</p>

<p>Only <strong>when the two hashes match</strong> are you authorized to access your email.</p>

<h3>Let's see why they do NOT save your actual password…</h3>

<img src="https://bpcdn.co/images/2022/02/14164945/hashing-password-1.png" alt="Password in Plaintext" style="background-color: white;" />

<p>If actual passwords are stored, and hackers get into their system, they can steal them. This is definitely not good for users who use the same password for multiple websites!</p>

<p>A solution is to hash the password…</p>

<img src="https://bpcdn.co/images/2022/02/14165031/hashing-password-2.png" alt="Hash Password" style="background-color: white;" />

<p>By hashing a password, the company protects user information. Even if a hacker breaks into the system, they won't have access to actual passwords, just the hashes.</p>

<p>Remember, hashes are <strong>irreversible</strong> so it's impossible for the hacker to figure out what the actual password is just by looking at the hash. Hashing ensures that the data is stored in a scrambled state, so it's harder to steal.</p>

<img src="https://bpcdn.co/images/2022/02/14165134/hashing-password-3.png" alt="Password Hashed and Protected" style="background-color: white;" />

<p>Whenever you log in, your email provider doesn't store the plain text password, all they need is the <strong>hash</strong>.</p>

<p>When you enter your password, it is run through the hash function.</p>

<p>The output is matched against the hash that is saved in the database.</p>

<p>If the hash values are the same, the password is correct.</p>

<p><strong>The wrong password entered would produce a different hash</strong> than the one saved. The hashes would NOT match, so your login attempt would FAIL.</p>

<p>So as you can see, a hash function <strong>garbles data and makes it unreadable</strong>. Even if a hacker gains access to your email provider's server, the details stored can't be unscrambled.</p>
`
        }
      ]
    },
    am: { title: "የሃሺንግ መመሪያ", description: "ሃሺንግ ምንድነው ይማሩ።", lessons: [] }
  },
  {
    id: 5, icon: "Pickaxe",
    en: { title: "Beginner's Guide to Bitcoin Mining", description: "Learn what Bitcoin mining is and how it works.", lessons: [] },
    am: { title: "የቢትኮይን ማዕድን ቆፈራ", description: "ቢትኮይን ማዕድን ቆፈራ ምንድነው ይማሩ።", lessons: [] }
  },
  {
    id: 6, icon: "Blocks",
    en: { title: "Beginner's Guide to Blockchain", description: "Learn what a blockchain is and how it's related to Bitcoin and other cryptocurrencies.", lessons: [] },
    am: { title: "የብሎክቼይን መመሪያ", description: "ብሎክቼይን ምንድነው ይማሩ።", lessons: [] }
  },
  {
    id: 7, icon: "Wallet",
    en: { title: "Beginner's Guide to Bitcoin Wallets", description: "In order to send or receive bitcoins, you need to use a Bitcoin \"wallet\". Learn what a wallet is, the different types, and how to use them.", lessons: [] },
    am: { title: "የቢትኮይን ዋሌት መመሪያ", description: "ቢትኮይን ዋሌት ምንድነው ይማሩ።", lessons: [] }
  },
  {
    id: 8, icon: "KeyRound",
    en: { title: "Beginner's Guide to Digital Signatures", description: "Digital signatures are a fundamental building block in cryptocurrencies. Learn what they are and how they work.", lessons: [] },
    am: { title: "የዲጂታል ፊርማ መመሪያ", description: "ዲጂታል ፊርማዎች ምንድናቸው ይማሩ።", lessons: [] }
  },
  {
    id: 9, icon: "Coins",
    en: { title: "Beginner's Guide to Altcoins", description: "Cryptocurrencies other than bitcoin are known as altcoins. Learn more about them.", lessons: [] },
    am: { title: "የአልትኮይን መመሪያ", description: "ከቢትኮይን ውጭ ያሉ ክሪፕቶኩረንሲዎች ይማሩ።", lessons: [] }
  },
  {
    id: 10, icon: "ArrowLeftRight",
    en: { title: "Beginner's Guide to Crypto Exchanges", description: "How do you buy bitcoin? Learn where to buy, sell, and trade cryptocurrencies.", lessons: [] },
    am: { title: "የክሪፕቶ ኤክስቼንጅ መመሪያ", description: "ቢትኮይን እንዴት ይገዛል ይማሩ።", lessons: [] }
  },
  {
    id: 11, icon: "ShieldAlert",
    en: { title: "Beginner's Guide to Common Crypto Scams", description: "A beginner's guide to how to spot common crypto scams and stay safe when using cryptocurrency.", lessons: [] },
    am: { title: "የክሪፕቶ ማጭበርበሪያ መመሪያ", description: "የተለመዱ ማጭበርበሪያዎችን እንዴት መለየት እንደሚቻል ይማሩ።", lessons: [] }
  },
  {
    id: 12, icon: "Gem",
    en: { title: "Beginner's Guide to Ethereum", description: "Learn what Ethereum is, how it works, and what makes it different from Bitcoin.", lessons: [] },
    am: { title: "የኢቴሪየም መመሪያ", description: "ኢቴሪየም ምንድነው ይማሩ።", lessons: [] }
  },
  {
    id: 13, icon: "TrendingUp",
    en: { title: "Beginner's Guide to Crypto Trading", description: "Are you new to crypto trading? Learn how to trade crypto using key trading principles.", lessons: [] },
    am: { title: "የክሪፕቶ ትሬዲንግ መመሪያ", description: "ክሪፕቶ ትሬዲንግ ይማሩ።", lessons: [] }
  },
  {
    id: 14, icon: "Image",
    en: { title: "Beginner's Guide to NFTs", description: "Non-fungible tokens (NFTs) are very popular in the crypto industry. Learn what NFTs are and how they work.", lessons: [] },
    am: { title: "የNFT መመሪያ", description: "NFT ምንድነው ይማሩ።", lessons: [] }
  },
  {
    id: 15, icon: "BarChart3",
    en: { title: "Beginner's Guide to Crypto ETFs", description: "Bitcoin has come a long way from its inception. The latest milestone is the emergence of crypto ETFs.", lessons: [] },
    am: { title: "የክሪፕቶ ETF መመሪያ", description: "ክሪፕቶ ETF ምንድነው ይማሩ።", lessons: [] }
  },
  {
    id: 16, icon: "LineChart",
    en: { title: "Beginner's Guide to On-Chain Analysis", description: "Unlock the world of on-chain analysis and see how it gives you insights that traditional market analysis cannot.", lessons: [] },
    am: { title: "የOn-Chain ትንተና መመሪያ", description: "On-chain ትንተና ይማሩ።", lessons: [] }
  }
];
