window.DPlayInventory = (() => {
	
	let TO_DELETE = null;
	
	let SHOW_ERROR = (tag, errorMsg, params) => {
		//REQUIRED: tag
		//REQUIRED: errorMsg
		//OPTIONAL: params
		
		let cal = CALENDAR();
			
		console.error(cal.getYear() + '-' + cal.getMonth(true) + '-' + cal.getDate(true) + ' ' + cal.getHour(true) + ':' + cal.getMinute(true) + ':' + cal.getSecond(true) + ' [' + tag + '] 오류가 발생했습니다. 오류 메시지: ' + errorMsg);
		
		if (params !== undefined) {
			console.error('다음은 오류를 발생시킨 파라미터입니다.');
			console.error(JSON.stringify(params, TO_DELETE, 4));
		}
	};
	
	let CHECK_IS_DATA = (target) => {
		//OPTIONAL: target

		if (
		target !== undefined &&
		target !== TO_DELETE &&
		CHECK_IS_ARRAY(target) !== true &&
		target instanceof Date !== true &&
		target instanceof RegExp !== true &&
		typeof target === 'object') {
			return true;
		}

		return false;
	};
	
	let CHECK_IS_ARRAY = (target) => {
		//OPTIONAL: target

		if (
		target !== undefined &&
		target !== TO_DELETE &&
		typeof target === 'object' &&
		Object.prototype.toString.call(target) === '[object Array]') {
			return true;
		}

		return false;
	};
	
	let EACH = (dataOrArrayOrString, func) => {
		//OPTIONAL: dataOrArrayOrString
		//REQUIRED: func
		
		if (dataOrArrayOrString === undefined) {
			return false;
		}

		// when dataOrArrayOrString is data
		else if (CHECK_IS_DATA(dataOrArrayOrString) === true) {

			for (let name in dataOrArrayOrString) {
				if (dataOrArrayOrString.hasOwnProperty === undefined || dataOrArrayOrString.hasOwnProperty(name) === true) {
					if (func(dataOrArrayOrString[name], name) === false) {
						return false;
					}
				}
			}
		}

		// when dataOrArrayOrString is func
		else if (func === undefined) {

			func = dataOrArrayOrString;
			dataOrArrayOrString = undefined;

			return (dataOrArrayOrString) => {
				return EACH(dataOrArrayOrString, func);
			};
		}

		// when dataOrArrayOrString is array or string
		else {

			let length = dataOrArrayOrString.length;

			for (let i = 0; i < length; i += 1) {

				if (func(dataOrArrayOrString[i], i) === false) {
					return false;
				}

				// when shrink
				if (dataOrArrayOrString.length < length) {
					i -= length - dataOrArrayOrString.length;
					length -= length - dataOrArrayOrString.length;
				}

				// when stretch
				else if (dataOrArrayOrString.length > length) {
					length += dataOrArrayOrString.length - length;
				}
			}
		}

		return true;
	};
	
	let STRINGIFY = (data) => {
		//REQUIRED: data
		
		if (CHECK_IS_DATA(data) === true) {
			return JSON.stringify(PACK_DATA(data));
		}
		
		else if (CHECK_IS_ARRAY(data) === true) {
			
			let f = (array) => {
				
				let newArray = [];
				
				EACH(array, (data) => {
					if (CHECK_IS_DATA(data) === true) {
						newArray.push(PACK_DATA(data));
					} else if (CHECK_IS_ARRAY(data) === true) {
						newArray.push(f(data));
					} else {
						newArray.push(data);
					}
				});
				
				return newArray;
			};
			
			return JSON.stringify(f(data));
		}
		
		else {
			return JSON.stringify(data);
		}
	};
	
	let inner = Connector('DPlayInventory');
	let self = {};
	
	// 이더리움 네트워크 이름을 가져옵니다.
	let getNetworkName = self.getNetworkName = (callback) => {
		//REQUIRED: callback
		
		inner.send('getNetworkName', undefined, callback);
	};
	
	// 이더리움 네트워크를 변경합니다.
	let changeNetwork = self.changeNetwork = (networkName, callback) => {
		//REQUIRED: networkName
		//REQUIRED: callback
		
		//TODO:
	};
	
	// 보관함에 로그인합니다.
	let login = self.login = () => {
		send('login');
	};
	
	// 계정의 ID를 가져옵니다.
	let getAccountId = self.getAccountId = () => {
		
	};
	
	// 스마트 계약을 배포합니다.
	let deploySmartContract = self.deploySmartContract = () => {
		
	};
	
	// 스마트 계약 인터페이스를 생성합니다.
	let createSmartContractInterface = self.createSmartContractInterface = (params, callback) => {
		//REQUIRED: params
		//REQUIRED: params.abi
		//REQUIRED: params.address
		//REQUIRED: callback
		
		send('createSmartContractInterface', params, callback);
	};
	
	// 스마트 계약의 메소드를 실행합니다.
	let runSmartContractMethod = self.runSmartContractMethod = (params, callback) => {
		//REQUIRED: params
		//REQUIRED: params.address
		//REQUIRED: params.methodName
		//REQUIRED: params.params
		//REQUIRED: callback
		
	};
	
	return self;
})();