Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["是","OPTIONNAME"], ["否","OPTIONNAME"]]), "NAME")
          .appendField("因为代码延迟而跳过了某些时刻");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(270);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };