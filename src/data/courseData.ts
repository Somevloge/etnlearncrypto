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

<img src="/images/module1/img_p1_1.png" alt="Cryptocurrency concept illustration" />

<h2>Cryptocurrencies are digital.</h2>

<p>Cryptocurrencies have no physical form. There are no dollar bills or metal coins.</p>

<p>They are completely digital, meaning they're literally just lines of computer code.</p>

<h2>Cryptocurrencies are borderless.</h2>

<p>Regardless of where you live or who you are, you can send it almost instantaneously to others anywhere in the world, without concern for geographic distance and country borders.</p>

<p>Cryptocurrencies are borderless. All you need is a device, like a phone or a computer, that's connected to the internet.</p>

<h2>Cryptocurrencies are permissionless.</h2>

<p>Anybody can send and receive cryptocurrencies. You don't need to register an account or fill out an application. Cryptocurrencies are permissionless.</p>

<p>You don't even need to give your name. Instead of names and account numbers, all you need to provide is a computer-generated string of letters and numbers known as an "address". This address is not inherently tied to any of your personal information, so you can theoretically send cryptocurrencies to other people without ever knowing each other's actual identities.</p>

<img src="/images/module1/img_p3_1.png" alt="Permissionless transactions illustration" />

<p>Since you can send and receive cryptocurrencies without giving any personally identifying information, cryptocurrencies provide some degree of privacy.</p>

<h2>Cryptocurrencies are decentralized.</h2>

<p>Unlike traditional currencies, also known as "fiat" currencies, such as the U.S. dollar, cryptocurrencies are not connected to any government or central bank.</p>

<p>For example, the U.S. dollar is issued and controlled by the Federal Reserve ("Fed"), the euro by the European Central Bank (ECB), and the Japanese yen by the Bank of Japan (BOJ).</p>

<img src="/images/module1/img_p4_1.png" alt="Central banks comparison" />

<p>This means that, unlike fiat currencies, cryptocurrencies are not controlled by a central authority. There is no bank or government behind them. This defining feature of cryptocurrencies is known as decentralization.</p>

<p>If no central bank or government issues or creates cryptocurrencies, then who creates them?</p>

<p>Units of a cryptocurrency are generated based on predetermined rules written in code which are executed by software.</p>

<p>One of the most important aspects of cryptocurrencies is their supply since this heavily determines their utility and value.</p>

<p>Depending on the rules written in the code of the software, cryptocurrencies can be created and destroyed. Some cryptocurrencies have a finite (or fixed) total supply, meaning that there is a maximum number of units that will ever be in circulation, creating scarcity.</p>

<p>Others are launched with an infinite total supply, meaning there is no maximum cap! (Although there might be a limit on the number of new units that can be created within a certain timeframe such as on a yearly basis.)</p>

<h2>Cryptocurrencies are counterfeit-proof.</h2>

<p>Cryptocurrencies are also designed to be counterfeit-proof. This is where cryptography is involved and how it's used to securely record and store transactions.</p>

<img src="/images/module1/img_p6_1.png" alt="Cryptography illustration" />

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

<img src="/images/module1/img_p11_1.png" alt="Asset classes illustration" />

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

<img src="/images/module1/img_p13_1.png" alt="Bitcoin and other cryptocurrencies" />

<p>There are also other well-known cryptocurrencies like Ether, XRP, Cardano, Solana, Dogecoin, Polkadot, Litecoin, Cosmos, and many others.</p>

<p>Some are similar to Bitcoin. Others are based on different technologies, or have new features that make them totally different from Bitcoin.</p>

<p>The term "cryptocurrency" is actually misleading because, unlike Bitcoin, most cryptocurrencies do not function as actual currencies.</p>

<p>Today, there are now THOUSANDS of cryptocurrencies that have been created, with each trying to offer new or improved functionalities.</p>

<img src="/images/module1/img_p14_1.png" alt="Thousands of cryptocurrencies" />

<p>from earlier cryptocurrencies or to serve a totally different purpose or use case.</p>

<p>Unfortunately, many are actually useless or, even worse, outright scams, but a lot of people still buy them.</p>

<p>Gullible noobs entering the crypto world hear about "A coin that will not only change the world but change the galaxy!"</p>

<p>They think: "I must buy this Galaticoin!"</p>

<img src="/images/module1/img_p15_1.png" alt="Galaticoin scam illustration" />

<p>They buy the dubious coin and give away their money without understanding the underlying technology.</p>

<p>No FOMO fo me!</p>

<p>The cryptocurrency ends up being worthless.</p>

<p>Some people are jumping into the crypto market with the wrong mentality. They believe that it's a sure bet….that the money they put in will just automatically grow.</p>

<img src="/images/module1/img_p16_1.png" alt="Wrong mentality illustration" />

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

<img src="/images/module1/img_p17_1.png" alt="Toshi Moshi character" />

<h2>Introduction to Cryptocurrencies</h2>

<p>If you're new to cryptocurrencies, you've come to the right place! I created this course to make it easier for beginners to understand the crypto market.</p>

<p>I provide easy-to-understand information on bitcoin, altcoins, tokens, and the crypto market in general.</p>

<p>Mainstream awareness of crypto has been gaining momentum. Every day, more and more people jump on the crypto bandwagon whether it's due to a strong passion for the technology's potential to positively impact the future or simply due to FOMO (fear of missing out). Along with this increased interest though, has brought an increase in questionable advice and misinformation.</p>

<p>Every day, more and more snake oil salesmen, conmen, shillers, shysters, fraud artists, and other shady folk grace us with their sleazy presence.</p>

<h2>Risks in the Crypto Market</h2>

<p>There are risks associated with the crypto market, which you need to take time to understand.</p>

<p>A lot of new traders make the mistake of wanting to get in as fast as they can, hoping to make quick profits and…. of course….get rich quickly!</p>

<p>It's mind-bogglingly to see so many folks on TikTok, Twitter, and Reddit gambling away their money so they can buy a lambo.</p>

<img src="/images/module1/img_p19_1.png" alt="Lambo dreams illustration" />

<p>At BabyPips.com, we encourage a different approach.</p>

<p>Just like we've stressed that forex trading is not a get-rich-quick scheme, you will not hear any get-rich-quick messages from us regarding crypto!</p>

<p>We strongly encourage that you take a conservative approach and only put a SMALL portion of your overall capital that you would use to invest or trade in the financial markets.</p>

<p>It's no exaggeration when we say that cryptocurrencies are extremely speculative. If you're not properly managing your risk, the probability that you'll lose a lot (if not all) of your money is high.</p>

<p>Caution and care should be exercised.</p>

<h2>CAUTION!</h2>

<p>Don't fall for the typical get-rich-quick pitch:</p>

<p>"Don't worry if you don't understand it. The people who do understand say it's going to be massive! It's the next big thing!"</p>

<p>I disagree.</p>

<img src="/images/module1/img_p21_1.png" alt="Caution illustration" />

<p>YOU do need to understand it.</p>

<p>I want you to be able to make informed decisions, to intelligently think about exactly what it is that you're buying, and know what the risks are and how to properly manage these risks.</p>

<p>In the future, when your grandkids visit you, which do you want to be telling them:</p>

<p>"I missed the boat on crypto."</p>

<p>"I bet your life savings and bought crypto, then lost it all because I didn't really understand what it was all about…and got suckered by some charismatic scammers…..which is why I'm now single and still living here with your great-grandma."</p>

<img src="/images/module1/img_p23_1.png" alt="Grandkids scenario illustration" />

<p>Hopefully, you will be telling them neither!</p>

<p>I want to prevent you from becoming a sucker.</p>

<p>I think it's crucial to at least have a basic understanding of the underlying technology and concepts of cryptocurrencies before plunking down any amount of money.</p>

<img src="/images/module1/img_p24_1.png" alt="Education is key illustration" />

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

<img src="/images/module1/img_p26_1.png" alt="Understanding Bitcoin illustration" />

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

<img src="/images/module1/img_p28_1.png" alt="Bitcoin technical description" />

<p>Cryptographic techniques such as public-key cryptography, hash functions, and digital signatures are used to keep the blockchain secure and immutable so it can be accessible to everybody but hackable to nobody.</p>

<p>Got all that? 🤔</p>

<p>I'm kidding!</p>

<p>But give yourself a pat on the back for actually reading all that and not scrolling past it. (You didn't scroll past it, right? 👀)</p>

<p>Have no fear. Do NOT be intimidated or discouraged.</p>

<h2>BEGINNER'S guide to Bitcoin</h2>

<p>This is the BEGINNER'S guide to Bitcoin and we assume zero technical knowledge.</p>

<p>So this is NOT really how we're going to start learning about Bitcoin.</p>

<p>But as you can clearly see, the crypto world is full of technical jargon!</p>

<img src="/images/module1/img_p30_1.png" alt="Technical jargon illustration" />

<h2>WTF am I reading?!</h2>

<p>Jumping into crypto introduces a large number of terms that most people will be unfamiliar with.</p>

<p>The crypto world seems to have its own language and those wishing to learn about the topic can quickly become overwhelmed with all the jargon, acronyms, and other technical terms. But if you really want to understand cryptocurrencies and how they are different, it's really important that you do familiarize yourself with certain core foundational concepts.</p>

<p>My goal is to cover terms and phrases that you may initially not know, but do need to know.</p>

<p>Together, we will blast jargon into smithereens so you're able to easily speak the language of the crypto world with ease.</p>

<img src="/images/module1/img_p32_1.png" alt="Jargon Blaster illustration" />

<p>I've also found a lot of inconsistencies in how certain terms are used or defined on the interwebz.</p>

<p>I want to establish a common vocabulary with clear definitions of concepts and terms.</p>

<p>This will help make sure that every time a buzzword or jargon phrase appears throughout our course, it is used consistently and correctly.</p>

<p>I can't stress enough the importance of learning the concepts behind all this ridiculous wonderful jargon.</p>

<p>How else will you impress your dinner date or wow a crowd at cocktail parties?</p>

<img src="/images/module1/img_p34_1.png" alt="Cocktail party crypto talk" />

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
    en: { title: "Beginner's Guide to Bitcoin", description: "Understanding Bitcoin, like what it is, where it came from, and how it works provides a solid foundation for being able to navigate the entire crypto space.", lessons: [] },
    am: { title: "የቢትኮይን መመሪያ", description: "ቢትኮይን ምንድነው፣ ከየት እንደመጣ እና እንዴት እንደሚሠራ ይማሩ።", lessons: [] }
  },
  {
    id: 3, icon: "Network",
    en: { title: "Beginner's Guide to the Bitcoin Network", description: "Learn what the Bitcoin network is, what happens on the Bitcoin network, and why it's important.", lessons: [] },
    am: { title: "የቢትኮይን ኔትወርክ መመሪያ", description: "የቢትኮይን ኔትወርክ ምንድነው ይማሩ።", lessons: [] }
  },
  {
    id: 4, icon: "Hash",
    en: { title: "Beginner's Guide to Hashing", description: "In order to truly understand how Bitcoin and other cryptocurrencies work, it's crucial to first understand the concept of \"hashing\".", lessons: [] },
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
