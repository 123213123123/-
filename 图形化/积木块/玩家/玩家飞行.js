Blockly.Blocks['block_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["允许","OPTIONNAME"], ["不允许","OPTIONNAME"]]), "NAME")
        .appendField(new Blockly.FieldDropdown([["玩家飞行","OPTIONNAME"], ["玩家跳跃","OPTIONNAME"], ["玩家二段跳跃","OPTIONNAME"]]), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};