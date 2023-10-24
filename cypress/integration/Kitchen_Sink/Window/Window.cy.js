/// <reference types="cypress" />

import { windowPO } from "./WindowPO.cy";

describe('actions', () => {
    const WindowPO = new windowPO()
    
beforeEach(() => {   
    WindowPO.Navigate()
})