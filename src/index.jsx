import {Button, WidgetCollection, TextView, ui} from 'tabris';

ui.contentView.append(
  <WidgetCollection>
    <Button centerX={0} centerY={0} onSelect={showText} >Tap here</Button>
    <TextView centerX={0} bottom='prev() 20' font='24px' />
  </WidgetCollection>
);

function showText() {
  ui.contentView.find(TextView).first().text = 'Tri Gunawan Apps!';
}
