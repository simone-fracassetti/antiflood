/*
 *  VERSION: @1.0.5
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
		this.requests.push(currentDate);
		const spam = this.requests.filter(request => currentDate.timestamp - request.timestamp < this.timeout && JSON.stringify(request.unique) === JSON.stringify(token));
		return !(spam.length > this.count);
	}
}

// this.requests.filter(r => currentDate - r.timestamp < this.timeout && JSON.stringify(r.unique) === JSON.stringify(token))
