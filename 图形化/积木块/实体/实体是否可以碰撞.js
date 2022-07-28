Blockly.Blocks['block_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("实体")
        .appendField(new Blockly.FieldDropdown([["是","OPTIONNAME"], ["否","OPTIONNAME"]]), "NAME")
        .appendField(new Blockly.FieldDropdown([["碰撞","OPTIONNAME"], ["下落","OPTIONNAME"]]), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};