/*
 *  VERSION: @1.0.2
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
	feed(token = {}){
		const currentDate = {timestamp: Math.floor(Date.now() / 1000), unique: token};
		if(this.requests.filter(r => currentDate - r.timestamp < this.timeout && JSON.stringify(r.unique) === JSON.stringify(token)).length + 1 > this.count)
			return false;
		else
			this.requests.push(currentDate);
		return true;
	}
}
