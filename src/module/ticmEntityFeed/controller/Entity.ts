/**
 * ticmEntityFeed - Entity
 * Copyright(c) 2019 Alejandro Villén
 * MIT Licensed
 */

import { coreInstance } from "../../../core/Core";


class Entity {
	constructor () { }

	/**
	 * getEntities
	 * @description
	 * @returns
	 */
	async getEntities(): Promise<ResponseDT> {
		return await coreInstance.entity.entity.getEntities();
	}
}

export let entityInstance = new Entity();