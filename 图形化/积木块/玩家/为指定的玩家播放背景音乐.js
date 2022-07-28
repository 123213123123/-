Blockly.Blocks['block_type'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("为指定的玩家播放背景音乐");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(240);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };