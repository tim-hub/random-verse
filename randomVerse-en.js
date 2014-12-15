var verse = new Array();
verse[0] = ["Jesus said to him, If you can beleve all things are possible to him who believes.","Mark 9:23"];
verse[1]=["For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.","John 3:16"];
verse[2]=["For the grave cannot praise thee, death can not celebrate thee: they that go down into the pit cannot hope for thy truth.   The living, the living, he shall praise thee, as I do this day: the father to the children shall make known thy truth.","Isaiah 38:18-19"];
verse[3]=["In the way of righteousness is life, and in its pathway there is no death.","Proverbs 12:28"];
verse[4]=["For thus saith the LORD, Ye have sold yourselves for nought; and ye shall be redeemed without money.","Isaiah 52:3"];
verse[5]=["Behold, my servant shall deal prudently, he shall be exalted and extolled, and be very high.","Isaiah 52:13"];
verse[6]=["But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.","Isaiah 53:5"];
verse[7]=["The Spirit of the Lord GOD is upon me; because the LORD hath anointed me to preach good tidings unto the meek; he hath sent me to bind up the brokenhearted, to proclaim liberty to the captives, and the opening of the prison to them that are bound;","Isaiah 61:1"];
verse[8]=["To proclaim the acceptable year of the LORD, and the day of vengeance of our God; to comfort all that mourn;  To appoint unto them that mourn in Zion, to give unto them beauty for ashes, the oil of joy for mourning, the garment of praise for the spirit of heaviness; that they might be called trees of righteousness, the planting of the LORD, that he might be glorified.", "Isaiah 61:2-3"];
verse[9]=["Doubtless thou art our father, though Abraham be ignorant of us, and Israel acknowledge us not: thou, O LORD, art our father, our redeemer; thy name is from everlasting.", "Isaiah 63:16"];
verse[10]=[" I know thy works, that thou art neither cold nor hot: I would thou wert cold or hot.   [16]  So then because thou art lukewarm, and neither cold nor hot, I will spue thee out of my mouth.","Revelation of John 3:15-16"];
verse[11]=[" As many as I love, I rebuke and chasten: be zealous therefore, and repent.","Revelation of John 3:19"];
verse[12]=["We are troubled on every side, yet not distressed; we are perplexed, but not in despair;  [9] Persecuted, but not forsaken; cast down, but not destroyed;  [10] Always bearing about in the body the dying of the Lord Jesus, that the life also of Jesus might be made manifest in our body. ","2 Corinthians 4:8-10"];
verse[13]=["Let every soul be subject unto the higher powers. For there is no power but of God: the powers that be are ordained of God. ","Romans 13:1"];
var i = gerRandomNumbers(verse.length);
document.write("<H1>" + verse[i][1] + "</H1>");
document.write(verse[i][0]);

function gerRandomNumbers(x) {
	return Math.floor(Math.random() * x)
}