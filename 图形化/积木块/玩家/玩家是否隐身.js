Blockly.Blocks['block_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("玩家")
        .appendField(new Blockly.FieldDropdown([["是","OPTIONNAME"], ["否","OPTIONNAME"]]), "NAME")
        .appendField(new Blockly.FieldDropdown([["隐身","OPTIONNAME"], ["显示名字","OPTIONNAME"]]), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};