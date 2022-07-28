Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("环境的照明")
          .appendField(new Blockly.FieldDropdown([["自定义","OPTIONNAME"], ["动态的","OPTIONNAME"]]), "NAME");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };