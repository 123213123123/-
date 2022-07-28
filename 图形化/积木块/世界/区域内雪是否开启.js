Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("区域内雪")
          .appendField(new Blockly.FieldDropdown([["是","OPTIONNAME"], ["否","OPTIONNAME"]]), "NAME")
          .appendField("开启");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };