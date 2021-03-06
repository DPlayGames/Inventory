DPlayInventory.Alert = CLASS({

	preset : () => {
		return UUI.ALERT;
	},

	params : () => {
		
		return {
			
			style : {
				width : 340,
				height : 240,
				backgroundImage : DPlayInventory.R('dialogue/background.png'),
				color : '#979b9b',
				boxShadow : '0 0 10px #000'
			},
			
			buttonStyle : {
				position : 'absolute',
				bottom : 8,
				left : '50%',
				marginLeft : -137.5,
				width : 275,
				height : 27,
				paddingTop : 6,
				fontWeight : 'bold',
				backgroundImage : DPlayInventory.R('dialogue/button.png')
			}
		};
	},

	init : (inner, self, params) => {
		//REQUIRED: params
		//OPTIONAL: params.title
		//REQUIRED: params.content
		
		let title = params.title;
		let content = params.content;
		
		self.append(H3({
			style : {
				padding : 2,
				fontWeight : 'bold'
			},
			c : title === undefined ? MSG('ALERT_TITLE') : title
		}));
		
		self.append(UUI.V_CENTER({
			style : {
				height : 170
			},
			c : P({
				style : {
					padding : 10
				},
				c : content
			})
		}));
	}
});
