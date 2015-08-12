export default function(){
  this.transition(
    this.fromRoute('user.index'),
    this.toRoute('user.following'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}