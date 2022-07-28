Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("区域内雪花纹理")
          .appendField(new Blockly.FieldTextInput("wd"), "NAME");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };