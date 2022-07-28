Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("玩家的")
          .appendField(new Blockly.FieldDropdown([["发光度","OPTIONNAME"], ["缩放比例","OPTIONNAME"], ["金属感","OPTIONNAME"], ["反光度","OPTIONNAME"]]), "NAME")
          .appendField("=");
      this.appendValueInput("NAME")
          .setCheck("Number");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };