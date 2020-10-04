/*
 *  VERSION: @1.0.0
 *  PACKAGE: Antiflood
 *  LICENSE: DO WHAT EVER YOU WANT BUT DON'T RESELL IT
 *  AUTHOR: clowboy
 */

module.exports = class{
	constructor(count, timeout){
		this.requests = [];
		this.timeout = timeout;
		this.count = count;
	}
	feed(){
		const currentDate = Math.floor(Date.now() / 1000);
		if(this.requests.filter(r => currentDate - r < this.timeout).length + 1 > this.count)
			return false;
		else
			this.requests.push(currentDate);
		return true;
	}
}
