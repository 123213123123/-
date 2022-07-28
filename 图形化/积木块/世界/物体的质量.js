 JavaScript
Blockly.Blocks['block_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("物体的质量")
        .appendField(new Blockly.FieldDropdown([["0","OPTIONNAME"], ["1","OPTIONNAME"]]), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};