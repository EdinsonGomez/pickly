goog.require('Blockly.JavaScript');


/* Timer 0 */
Blockly.JavaScript['tmr_tmr0_get'] = function(block) {
	var code = 'get_timer0()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['tmr_tmr0_set'] = function(block) {
	var value = block.getFieldValue('tmr0_value');
	var code = 'set_timer0(' + value + ');\n';
	return code
};
Blockly.JavaScript['tmr_tmr0_setup'] = function(block) {
	var prescaler = block.getFieldValue('PSAoptions');
	var edge = block.getFieldValue('EDGEoptions');
	var clk = block.getFieldValue('CLKoptions');
	var code;

	if(clk == 'T0_INTERNAL') {
		code = 'setup_timer_0('+ clk +'|' + prescaler +')';
	} else if(clk == 'T0_EXTERNAL') {
		if(edge == 'LOW2HIGH') {
			code = 'setup_timer_0(T0_EXT_L_TO_H|'+ prescaler +')';
		} else {
			code = 'setup_timer_0(T0_EXT_H_TO_L|'+ prescaler +')';
		}
	}
	return code + ';\n';
};
Blockly.JavaScript['tmr_tmr0_set_18'] = function(block) {
	var value = block.getFieldValue('tmr0_value');
	var code = 'set_timer0(' + value + ');\n';
	return code
};
Blockly.JavaScript['tmr_tmr0_setup_18'] = function(block) {
	var prescaler = block.getFieldValue('PSAoptions');
	var edge = block.getFieldValue('EDGEoptions');
	var clk = block.getFieldValue('CLKoptions');
	var mode = block.getFieldValue('8BITMODE');
	var code;

	if(clk == 'T0_INTERNAL') {
		code = 'setup_timer_0('+ clk +'|' + prescaler;
	} else if(clk == 'T0_EXTERNAL') {
		if(edge == 'LOW2HIGH') {
			code = 'setup_timer_0(T0_EXT_L_TO_H|'+ prescaler;
		} else {
			code = 'setup_timer_0(T0_EXT_H_TO_L|'+ prescaler;
		}
	}

	if(mode == 'TRUE') {
		code = code + '|T0_8_BIT';
	}
	return code + ');\n';
};
/* Timer 1 */
Blockly.JavaScript['tmr_tmr1_get'] = function(block) {
	var code = 'get_timer1()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['tmr_tmr1_set'] = function(block) {
	var value = block.getFieldValue('tmr1_value');
	var code = 'set_timer1(' + value + ');\n';
	return code
};
Blockly.JavaScript['tmr_tmr1_setup'] = function(block) {
	var enable = block.getFieldValue('ENABLEtmr1');
	var clk = block.getFieldValue('CLKoptions');
	var prescaler = block.getFieldValue('PSAoptions');
	var code;
	
	if(enable == 'TRUE') {
		if(clk == 'T1_INTERNAL') {
			code = 'setup_timer_1('+ clk +'|'+ prescaler +');\n';
		} else {
			code = 'setup_timer_1('+ clk +'|'+ 'T1_DIV_BY_1);\n';
		}
	} else {
		code = 'setup_timer_1(T1_DISABLED);\n';
	}
	return code;
};
/* Timer 2 */
Blockly.JavaScript['tmr_tmr2_get'] = function(block) {
	var code = 'get_timer2()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['tmr_tmr2_set'] = function(block) {
	var value = block.getFieldValue('tmr2_value');
	var code = 'set_timer2('+ value +');\n';
	return code;
};
Blockly.JavaScript['tmr_tmr2_setup'] = function(block) {
	var enable = block.getFieldValue('ENABLEtmr2');
	var prescaler = block.getFieldValue("PSAoptions");
	var period = block.getFieldValue('PR2value');
	var postscaler = block.getFieldValue('POSAvalue');
	var code;

	if(enable === "TRUE"){
		code = 'setup_timer_2('+ prescaler + ', ' + period + ', ' + postscaler + ');\n';
	} else {
		code = 'setup_timer_2(T2_DISABLED);\n';
	}
	return code;
};
/* Timer 3 */
Blockly.JavaScript['tmr_tmr3_get'] = function(block) {
	var code = 'get_timer3()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['tmr_tmr3_set'] = function(block) {
	var value = block.getFieldValue('tmr3_value');
	var code = 'set_timer3(' + value + ');\n';
	return code
};
Blockly.JavaScript['tmr_tmr3_setup'] = function(block) {
	var enable = block.getFieldValue('ENABLEtmr3');
	var clk = block.getFieldValue('CLKoptions');
	var prescaler = block.getFieldValue('PSAoptions');
	var code;
	
	if(enable == 'TRUE') {
		if(clk == 'T3_INTERNAL') {
			code = 'setup_timer_3('+ clk +'|'+ prescaler +');\n';
		} else {
			code = 'setup_timer_3('+ clk +'|'+ prescaler +');\n';
		}
	} else {
		code = 'setup_timer_3(T3_DISABLED|T3_DIV_BY_1);\n';
	}
	return code;
};