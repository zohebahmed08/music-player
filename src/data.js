// FileName: data.js 

import { v4 as uuidv4 } from "uuid"; 
function chillHop() { 
return [ 
	{ 
	name: "Still D.R.E. ft. Snoop Dogg", 
	cover: 
"https://i0.wp.com/amerigomusic.com/wp-content/uploads/2018/02/still-dre-2.jpg", 
	artist: "Dr. DRE", 
	audio: 
"https://ia802904.us.archive.org/33/items/snupdog/Dr.%20Dre%20-%20Still%20D.R.E.%20ft.%20Snoop%20Dogg.mp3", 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: true, 
	}, 
	{ 
	name: "Lalala", 
	cover: 
		"https://i1.sndcdn.com/artworks-000550247256-tt6g90-t500x500.jpg", 
	artist: "Y2K, bbno$", 
	audio: 
		"https://ia801001.us.archive.org/15/items/BbnoY2kLalala/bbno%24%20%20y2k%20-%20lalala.mp3", 
	color: ["#EF8EA9", "#ab417f"], 
	id: uuidv4(), 
	active: false, 
	}, 
	{ 
	name: "Look At Me Now", 
	cover: 
"https://upload.wikimedia.org/wikipedia/en/e/e8/LOOKATMENOW.jpg", 
	artist: "Chris Brown", 
	audio: 
"https://ia803105.us.archive.org/22/items/acidplanet-audio-01411309/01411309.mp3", 
	color: ["#CD607D", "#c94043"], 
	id: uuidv4(), 
	active: false, 
	}, 
	{ 
	name: "Right Now (NA NA NA)", 
	cover: 
"https://i.scdn.co/image/ab67616d0000b273e77aece1352dcc4f4cfd097f", 
	artist: "Akon", 
	audio: 
"https://ia801408.us.archive.org/20/items/AkonNanana/Akon-RightNowNaNaNa1.mp3", 
	color: ["#EF8EA9", "#ab417f"], 
	id: uuidv4(), 
	active: false, 
	}, 
	{ 
	name: "Black Skinhead", 
	cover: 
"https://sergioingravalle.de/wp-content/uploads/2015/10/09-Black-Skinhead-frame.jpg", 
	artist: "Kanye West", 
	audio: 
"https://ia600701.us.archive.org/18/items/BlackSkinhead/Black%20Skinhead.mp3", 
	color: ["#CD607D", "#c94043"], 
	id: uuidv4(), 
	active: false, 
	}, 
	{ 
	name: "Rap God", 
	cover: 
"https://pbs.twimg.com/media/Ddu9ZFFU8AAVnAM.jpg", 
	artist: "Eminem", 
	audio: 
"https://ia903107.us.archive.org/8/items/emrg_20191011/eminem%20rap%20god%20explicit.mp3", 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: false, 
	}, 
]; 
} 

export default chillHop; 
