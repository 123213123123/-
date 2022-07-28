Blockly.Blocks['block_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["允许","OPTIONNAME"], ["不允许","OPTIONNAME"]]), "NAME")
        .appendField("实体进行互动");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};