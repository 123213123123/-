Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("实体的位置")
          .appendField(new Blockly.FieldDropdown([["是","OPTIONNAME"], ["否","OPTIONNAME"]]), "NAME")
          .appendField("固定不动");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };