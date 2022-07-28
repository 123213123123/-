Blockly.Blocks['block_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["X","OPTIONNAME"], ["Y","OPTIONNAME"], ["Z","OPTIONNAME"]]), "NAME")
        .appendField("轴方向的亮度");
    this.appendValueInput("NAME")
        .setCheck("Number");
    this.appendValueInput("NAME")
        .setCheck("Number");
    this.appendValueInput("NAME")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};