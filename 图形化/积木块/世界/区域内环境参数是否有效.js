Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("区域内环境参数是否有效")
          .appendField(new Blockly.FieldDropdown([["是","OPTIONNAME"], ["否","OPTIONNAME"]]), "NAME");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };