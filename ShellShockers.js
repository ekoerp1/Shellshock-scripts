// ==UserScript==
// @name         ShellShockers -NO ADS- Aimbot & ESP
// @namespace    http://tampermonkey.net/
// @version      2024-01-21
// @description  A simple ShellShockers mod menu
// @author       You
// @match        https://shellshock.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shellshock.io
// @grant        none
// @downloadURL https://update.greasyfork.org/scripts/498385/ShellShockers%20-NO%20ADS-%20Aimbot%20%20ESP.user.js
// @updateURL https://update.greasyfork.org/scripts/498385/ShellShockers%20-NO%20ADS-%20Aimbot%20%20ESP.meta.js
// ==/UserScript==

let keys = {};

let aimbotEnabled = false;
let aimbotOnRightMouse = false;
let espEnabled = false;
let showLines = false;
let showTeam = false;

const adList = [
    'shellshockers_respawn_banner-new_ad',
    'shellshockers_respawn_banner',
    'shellshockers_respawn_banner_2_ad',
    'shellshockers_respawn_banner_3_ad',
    'shellshockers_titlescreen',
    'shellshock-io_728x90_HP_wrap',
    'display-ad-header-home'
];
const classList = ['house-ad-wrapper'];

setInterval(function () {
    var count = adList.length;
    window.localStorage.setItem("lastPreRoll", Date.now() + 432e5);
    window.localStorage.setItem("showBigAd", Date.now() + 432e5);

    for (var i = 0; i < count; i++) {
        var adID = adList[i];
        var classID = classList[i];

        const element = document.getElementById(adID);
        const classElement = document.querySelector(classID);

        if (element !== null) {
            element.remove();
        }

        if (classElement !== null) {
            classElement.remove();
        }

        if (classElement == null && element == null) {
            continue;
        }

        if (typeof window?.extern?.account !== "undefined" && typeof vueApp !== "undefined") {
                        if (!vueApp.isUpgraded || !extern.account.isSubscriber) { vueApp.setAccountUpgraded(true, ""); extern.account.isSubscriber = true; }
                    }
    }
}, 10);

window.XMLHttpRequest = class extends window.XMLHttpRequest {

    open(method, url) {
        if (url.includes('shellshock.js')) {
            this.isScript = true;
        }

        return super.open(...arguments);
    }

    get response() {
        if (this.isScript) {
            let response = super.response;

            let babylonVarName,
				playersVarName,
				myPlayerVarName,
				sceneVarName,
				cullFuncName;

			const extractors = {
				BracketSingleQuote() {

					const matches = /([a-zA-Z_$0-9]+)\['([^']+)'\]\['([^']+)'\]\("[^"]+",{si/.exec( response );

					babylonVarName = matches[ 1 ];
					playersVarName = /[a-zA-Z_$0-9]+\['[^']+'\]\),!([a-zA-Z_$0-9]+)\[/.exec( response )[ 1 ];
					myPlayerVarName = /document\.pointerLockElement&&([^&]+)&&/.exec( response )[ 1 ];
					sceneVarName = /if\([a-zA-Z_$0-9]+\['[^']+'\]\(([a-zA-Z_$0-9]+),[a-zA-Z_$0-9]+,[a-zA-Z_$0-9]+,null/.exec( response )[ 1 ];
					cullFuncName = /=([a-zA-Z_$0-9]+)\(this\['([^']+)'\],\.[0-9]+\)/.exec( response )[ 1 ];

					keys.MeshBuilder = matches[ 2 ];
					keys.CreateBox = matches[ 3 ];
					keys.CreateLines = /\['([^']+)'\]\("",{po/.exec( response )[ 1 ];
					keys.Vector3 = /new [a-zA-Z_$0-9]+\['([^']+)'\]\(\.5,\.5,\.5\),/.exec( response )[ 1 ];
					keys.actor = /this\['([^']+)'\]\['([^']+)'\]\.position,!/.exec( response )[ 1 ];
					keys.playing = /OPEN&&[a-zA-Z_$0-9]+\['([^']+)'\]/.exec( response )[ 1 ];

					keys.yaw = /\*=[a-zA-Z_$0-9]+,[a-zA-Z_$0-9]+\['([^']+)'\]=Math\.r/.exec( response )[ 1 ];
					keys.pitch = /\),[a-zA-Z_$0-9]+\['([^']+)'\]=Math\.max\(Math\.min/.exec( response )[ 1 ];
					keys.mesh = /,\.[0-9]+\);this\['([^']+)'\]\['([^']+)'\]\(/.exec( response )[ 1 ];

				},
				BracketDoubleQuote() { // might not be needed but just in case

					const matches = /([a-zA-Z_$0-9]+)\["([^"]+)"\]\["([^"]+)"\]\("[^"]+",{si/.exec( response );

					babylonVarName = matches[ 1 ];
					playersVarName = /[a-zA-Z_$0-9]+\["[^"]+"\]\),!([a-zA-Z_$0-9]+)\[/.exec( response )[ 1 ];
					myPlayerVarName = /document\.pointerLockElement&&([^&]+)&&/.exec( response )[ 1 ];
					sceneVarName = /if\([a-zA-Z_$0-9]+\["[^"]+"\]\(([a-zA-Z_$0-9]+),[a-zA-Z_$0-9]+,[a-zA-Z_$0-9]+,null/.exec( response )[ 1 ];
					cullFuncName = /=([a-zA-Z_$0-9]+)\(this\["([^"]+)"\],\.[0-9]+\)/.exec( response )[ 1 ];

					keys.MeshBuilder = matches[ 2 ];
					keys.CreateBox = matches[ 3 ];
					keys.CreateLines = /\["([^"]+)"\]\("",{po/.exec( response )[ 1 ];
					keys.Vector3 = /new [a-zA-Z_$0-9]+\["([^"]+)"\]\(\.5,\.5,\.5\),/.exec( response )[ 1 ];
					keys.actor = /this\["([^"]+)"\]\["([^"]+)"\]\.position,!/.exec( response )[ 1 ];
					keys.playing = /OPEN&&[a-zA-Z_$0-9]+\["([^"]+)"\]/.exec( response )[ 1 ];

					keys.yaw = /\*=[a-zA-Z_$0-9]+,[a-zA-Z_$0-9]+\["([^"]+)"\]=Math\.r/.exec( response )[ 1 ];
					keys.pitch = /\),[a-zA-Z_$0-9]+\["([^"]+)"\]=Math\.max\(Math\.min/.exec( response )[ 1 ];
					keys.mesh = /,\.[0-9]+\);this\["([^"]+)"\]\["([^"]+)"\]\(/.exec( response )[ 1 ];

				},
				Dot() { // in case the shellshock devs revert back to dot syntax :skull:

					const matches = /([a-zA-Z_$0-9]+)\.([a-zA-Z_$0-9]+)\.([a-zA-Z_$0-9]+)\("[^"]+",{si/.exec( response );

					babylonVarName = matches[ 1 ];
					playersVarName = /[a-zA-Z_$0-9]+\.[a-zA-Z_$0-9]+\),!([a-zA-Z_$0-9]+)\[/.exec( response )[ 1 ];
					myPlayerVarName = /document\.pointerLockElement&&([^&]+)&&/.exec( response )[ 1 ];
					sceneVarName = /if\([a-zA-Z_$0-9]+\.[a-zA-Z_$0-9]+\(([a-zA-Z_$0-9]+),[a-zA-Z_$0-9]+,[a-zA-Z_$0-9]+,null/.exec( response )[ 1 ];
					cullFuncName = /=([a-zA-Z_$0-9]+)\(this\.([a-zA-Z_$0-9]+),\.[0-9]+\)/.exec( response )[ 1 ];

					keys.MeshBuilder = matches[ 2 ];
					keys.CreateBox = matches[ 3 ];
					keys.CreateLines = /\.([a-zA-Z_$0-9]+)\("",{po/.exec( response )[ 1 ];
					keys.Vector3 = /new [a-zA-Z_$0-9]+\.([a-zA-Z_$0-9]+)\(\.5,/.exec( response )[ 1 ];
					keys.actor = /this\.([a-zA-Z_$0-9]+)\.[a-zA-Z_$0-9]+\.position,!/.exec( response )[ 1 ];
					keys.playing = /OPEN&&[a-zA-Z_$0-9]+\.([a-zA-Z_$0-9]+)/.exec( response )[ 1 ];

					keys.yaw = /\*=[a-zA-Z_$0-9]+,[a-zA-Z_$0-9]+\.([a-zA-Z_$0-9]+)=Math\.r/.exec( response )[ 1 ];
					keys.pitch = /\),[a-zA-Z_$0-9]+\.([a-zA-Z_$0-9]+)=Math\.max\(Math\.min/.exec( response )[ 1 ];
					keys.mesh = /,\.[0-9]+\);this\.([a-zA-Z_$0-9]+)\.[a-zA-Z_$0-9]+\(/.exec( response )[ 1 ];

				}
			};

			const numExtractors = Object.keys( extractors ).length;
			let failures = 0;

			for ( const name in extractors ) {

				try {

					extractors[ name ]();
					break;

				} catch ( error ) {

					failures ++;
					if ( failures >= numExtractors ) {

						alert( 'Script failed to inject. Report the issue to the script developer.\n' + JSON.stringify( getVars(), undefined, 2 ) );
						return response;

					}

				}

			}

			function getVars() {

				return {
					babylonVarName,
					playersVarName,
					myPlayerVarName,
					playersVarName,
					sceneVarName,
					cullFuncName,
					keys
				};

			}

			response = String.prototype.replace.call( response, sceneVarName + '.render()', `

				window[ '${onUpdateFuncName}' ](
					${babylonVarName},
					${playersVarName},
					${myPlayerVarName}
				);

			${sceneVarName}.render()` );
			response = String.prototype.replace.call( response, `function ${cullFuncName}`, `

				function ${cullFuncName}() {

					return true;

				}

			function someFunctionWhichWillNeverBeUsedNow` );


            return response;
        }

        return super.response;
    }
};

// Aimbot and GUI creation
let createGUI = function() {
    this.gui = new guify({
        title: "<b>Mod Panel</b>",
        theme: "dark",
        align: "left",
        width: 300,
        barMode: "none",
        panelMode: "none",
        opacity: 0.9,
        root: window.container,
        open: true,
        components: {
            SetVisible: {
                type: "button",
                label: "Set Visible",
                onClick: () => this.gui.toggle()
            }
        }
    });

    var menuButton = this.gui.panel.menuButton;
    if (menuButton) {
        menuButton.style.opacity = 0.3;
    }

    this.gui.Register([{
        type: "folder",
        label: "GUI",
        open: false
    }]);

    this.gui.Register([{
        type: "folder",
        label: "Aimbot Hacks",
        open: false
    }]);

    this.gui.Register([{
        type: "checkbox",
        label: "Hide Menu Button",
        property: "buttonOP",
        onChange: function (bool) {
            menuButton.style.opacity = bool ? 0 : 0.3;
        }
    }], {
        folder: "GUI"
    });

    this.gui.Register([{
        type: "checkbox",
        label: "Aimbot",
        property: "aimbot12",
        onChange: function (bool) {
            aimbotEnabled = bool;
        }
    }, {
        type: "checkbox",
        label: 'Aimbot On Right Click (Aimbot Must Be Enabled)',
        property: "aimbot12",
        onChange: function (bool) {
            aimbotOnRightMouse = bool;
        }
    }, {
        type: "checkbox",
        label: "ESP",
        property: "esp12",
        onChange: function (bool) {
            espEnabled = bool;
        }
    }, {
        type: "checkbox",
        label: 'Show Lines (ESP must be enabled)',
        property: "esp12",
        onChange: function (bool) {
            showLines = bool;
        }
    }, {
        type: "checkbox",
        label: 'Show Teams (ESP must be enabled)',
        property: "team12",
        onChange: function (bool) {
            showTeam = bool;
        }
    }], {
        folder: "Aimbot Hacks"
    });
};

let script = document.createElement('script');
script.onload = function() {
    createGUI();
};
script.src = "https://unpkg.com/guify@0.12.0/lib/guify.min.js";
document.body.appendChild(script);





// from this point on all of the code is the hack


function fromCamel( text ) {

	const result = text.replace( /([A-Z])/g, ' $1' );
	return result.charAt( 0 ).toUpperCase() + result.slice( 1 );

}


let rightMouseDown = true;

function handleMouse( event ) {

	if ( event.button === 2 ) {

		rightMouseDown = event.type === 'pointerdown' ? true : false;

	}

}

window.addEventListener( 'pointerdown', handleMouse );
window.addEventListener( 'pointerup', handleMouse );



let initialized = false;
let lineOrigin, linesArray;
let colors;

const onUpdateFuncName = btoa( Math.random().toString( 32 ) );

window[ onUpdateFuncName ] = function ( BABYLON, players, myPlayer ) {

	if ( ! initialized ) {

		initialized = true;

		lineOrigin = new BABYLON[ keys.Vector3 ]();
		linesArray = [];

		colors = {
			enemy: new BABYLON.Color3( 1, 0, 0 ),
			team: new BABYLON.Color3( 0, 0, 1 ),
		};

	}

	lineOrigin.copyFrom( myPlayer[ keys.actor ][ keys.mesh ].position );

	const yaw = myPlayer[ keys.actor ][ keys.mesh ].rotation.y;
	lineOrigin.x += Math.sin( yaw );
	lineOrigin.z += Math.cos( yaw );
	lineOrigin.y += Math.sin( - myPlayer[ keys.pitch ] );

	for ( let i = 0; i < linesArray.length; i ++ ) {

		linesArray[ i ].playerExists = false;

	}

	for ( let i = 0; i < players.length; i ++ ) {

		const player = players[ i ];

		if ( ! player || player === myPlayer ) continue;

		if ( player.sphere === undefined ) {

			const material = new BABYLON.StandardMaterial( 'myMaterial', player[ keys.actor ].scene );
			material.wireframe = true;

			const sphere = BABYLON[ keys.MeshBuilder ][ keys.CreateBox ]( 'mySphere', { width: 0.5, height: 0.75, depth: 0.5 }, player[ keys.actor ].scene );
			sphere.material = material;
			sphere.position.y = 0.3;
			sphere.parent = player[ keys.actor ][ keys.mesh ];
			sphere.renderingGroupId = 1;

			player.sphere = sphere;

		}

		if ( player.lines === undefined ) {

			const options = {
				points: [ lineOrigin, player[ keys.actor ][ keys.mesh ].position ],
				updatable: true
			};

			const lines = options.instance = BABYLON[ keys.MeshBuilder ][ keys.CreateLines ]( 'lines', options, player[ keys.actor ].scene );
			lines.alwaysSelectAsActiveMesh = true;
			lines.renderingGroupId = 1;

			player.lines = lines;
			player.lineOptions = options;

			linesArray.push( lines );

		}

		player.lines.playerExists = true;
		player.lines = BABYLON[ keys.MeshBuilder ][ keys.CreateLines ]( 'lines', player.lineOptions );

		const isEnemy = myPlayer.team === 0 || myPlayer.team !== player.team;
		player.sphere.visibility = espEnabled && ( isEnemy || showTeam );
		player.lines.visibility = showLines && player[ keys.playing ] && ( isEnemy || showTeam );

		player.sphere.material.emissiveColor =
			player.sphere.material.diffuseColor =
			player.lines.color = isEnemy ? colors.enemy : colors.team;

	}

	for ( let i = 0; i < linesArray.length; i ++ ) {

		if ( ! linesArray[ i ].playerExists ) {

			linesArray[ i ].dispose();
			linesArray.splice( i, 1 );

		}

	}

	if ( aimbotEnabled && ( aimbotOnRightMouse ? rightMouseDown : true ) && myPlayer[ keys.playing ] ) {

		let minDistance = Infinity;
		let targetPlayer;

		for ( let i = 0; i < players.length; i ++ ) {

			const player = players[ i ];

			if ( player && player !== myPlayer && player[ keys.playing ] && ( myPlayer.team === 0 || player.team !== myPlayer.team ) ) {

				const distance = Math.hypot(
					getPos( player, 'x' ) - getPos( myPlayer, 'x' ),
					getPos( player, 'y' ) - getPos( myPlayer, 'y' ),
					getPos( player, 'z' ) - getPos( myPlayer, 'z' )
				);

				if ( distance < minDistance ) {

					minDistance = distance;
					targetPlayer = player;

				}

			}

		}

		if ( targetPlayer ) {

			const x = getPos( targetPlayer, 'x' ) - getPos( myPlayer, 'x' );
			const y = getPos( targetPlayer, 'y' ) - getPos( myPlayer, 'y' );
			const z = getPos( targetPlayer, 'z' ) - getPos( myPlayer, 'z' );

			myPlayer[ keys.yaw ] = Math.radAdd( Math.atan2( x, z ), 0 );
			myPlayer[ keys.pitch ] = - Math.atan2( y, Math.hypot( x, z ) ) % 1.5;

		}

	}

}

function getPos( player, component ) {

	return player[ keys.actor ][ keys.mesh ].position[ component ];

}
