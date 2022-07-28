Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("实体的")
          .appendField(new Blockly.FieldDropdown([["粘性","OPTIONNAME"], ["弹性","OPTIONNAME"]]), "NAME")
          .appendField(new Blockly.FieldDropdown([["1","OPTIONNAME"], ["0","OPTIONNAME"]]), "NAME");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };