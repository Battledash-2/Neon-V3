export default class Environment {
	constructor(env = {}, par = null, con = {}, locked = false) {
		this.record = env;
		this.parent = par;
		this.constants = con;
		this.locked = locked ?? false;
	}

	define(name, value, _pos, constant) {
		if (this.locked) return false;
		this.record[name] = value;
		if (constant) {this.constants[name] = constant;}
		return value;
	}

	_assign(name, value, pos) {
		if (this.locked) return false;
		let env = this.resolve(name, pos);
		if (this.isConstant(name, pos)) throw new TypeError(`Cannot overwrite constant variable '${name}' (${pos.filename}:${pos.line}:${pos.cursor})`);
		env.record[name] = value;
		return value;
	}

	assign(name, value, pos) {
		if (this.locked) return false;
		if (this.varExists(name)) return this._assign(name, value, pos);
		return this.define(name, value, pos, false);
	}

	lookup(name, pos) {
		return this.resolve(name, pos).record[name];
	}

	nonInheritedlookup(name, pos) {
		if (!this.record.hasOwnProperty(name)) throw new ReferenceError(`Could not resolve variable '${name}' (${pos.filename}:${pos.line}:${pos.cursor})`);
		return this.record[name];
	}

	isConstant(name, pos) {
		let env = this.resolve(name, pos);
		if (env.constants.hasOwnProperty(name)) {return true;}
	}

	varExists(name) {
		if (this.record.hasOwnProperty(name)) return true;
		if (this.parent == null || !(this.parent instanceof Environment)) return false;

		return this.parent.varExists(name);
	}

	resolve(name, pos) {
		if (this.record.hasOwnProperty(name)) return this;
		if (this.parent == null || !(this.parent instanceof Environment)) throw new ReferenceError(`Could not resolve variable '${name}' (${pos.filename}:${pos.line}:${pos.cursor})`);
		if (this.parent.record?.hasOwnProperty?.(name)) return this.parent;

		return this.parent.resolve(name, pos);
	}
}