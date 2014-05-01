
define(['basic'], function($){

  console.log('hello inside widgetManager');

  /*
  Possible Widgets
    Parallel
      Player
      Queue
      Library
    Serial
      Search
      Contribute
      Wallet
      ProfileTuner
      Notes
      Messages
      Shouts
  */
  var wm = {
    _widgetBar  : $('#widgetBar'),
    _sidebar    : $('#sidebar'),
    open: function( btn ) {
      var self = this,
          id = btn.id,
          openPanes = this._sidebar.querySelectorAll(':not(.hidden)'),
          openBtns  = this._widgetBar.querySelectorAll('.active'),
          forEach = Array.prototype.forEach;

      console.log('open:'+id);
      if( openPanes && open.length >= 1 ){
        forEach.call(openPanes, function( elm ){
          if( elm.id !== id.replace('widget', 'pane') ){
            elm.classList.add('hidden');
          }
        });
      }
      if( openBtns && openBtns.length >= 1 ){
        forEach.call(openBtns, function( elm ){
          if( elm.id !== id ){
            elm.classList.remove('active');
          }
        });
      }

      
      self._sidebar.querySelector( '#'+id.replace('widget', 'pane') ).classList.remove('hidden');
      btn.classList.add('active');

      if( self._sidebar.classList.contains('hidden') ){
        self._sidebar.classList.remove('hidden');
      }
    },
    close: function( btn ) {
      var self = this,
          id = btn.id;
      
      console.log('close:'+id);
      self._sidebar.querySelector( '#'+id.replace('widget', 'pane') ).classList.add('hidden');
      btn.classList.remove('active');

      if( self._sidebar.querySelectorAll(':not(.hidden)').length === 0 ){
        self._sidebar.classList.add('hidden');
      }
    }
  };


  // Widget Button Listener
  $('#widgetBar').on('click', 'button', function(e){
    if( $(this).hasClass('active') ){
      wm.close( this );
    } else {
      wm.open( this );
    }
  });

  // Export Widget Manager Module
  return wm;
});

/*
(function ( window ) {
 
  var widgetManager = {
    //slidePane: document.getElementById('slidePane'),
    active: [],
    isOpen: function ( id ) {
      for ( var i = 0 ; i < this.active.length ; i++ ) {
        if ( this.active[i] === id ) {
          return true;
        }
      }
      return false;
    },
    open:   function ( id ) {
      var self = this,
        widget = document.getElementById('widget-' + id),
        slide = document.getElementById('slide-' + id);

      if ( self.active.length >= 1 ) {
        self.close(self.active.pop());
      }

      widget.classList.add('active');
      slide.classList.remove('hidden');
      slide.querySelector('.slideContent').classList.remove('hidden');
      self.active.push(id);

//		if(self.slidePane.classList.contains('hidden')){
//			self.slidePane.classList.remove('hidden');
//		}
    },
    close:  function ( id ) {
      var self = this,
        widget = document.getElementById('widget-' + id),
        slide = document.getElementById('slide-' + id);

      widget.classList.remove('active');
      slide.classList.add('hidden');
      slide.querySelector('.slideContent').classList.add('hidden');
//		if(self.active.length === 0){
//			self.slidePane.classList.add('hidden');
//		}
    }
  };

  document.getElementById('nav').addEventListener('click', function ( ev ) {
    ev.preventDefault();
    var nav = this, thisSlide, i = 0,
      slidePane = document.getElementById('slidePane'),
      target = ev.target;
    if ( target.classList.contains('miniPlayer') ) {
      return;
    }

    console.log('target:', ev.target);
    if ( !(target instanceof HTMLButtonElement) ) {
      do {
        target = target.parentNode;
      } while ( !(target instanceof HTMLButtonElement) );
    }

    // if is widget button
    if ( target.id && target.id !== "" && (/^widget-/).test(target.id) ) {
      if ( (/player|library|queue/).test(target.id) ) {
        console.log('player/lib/queue do nothing for now');
        return;
      } else if ( widgetManager.isOpen(target.id.replace((/^widget-/), '')) ) {
        widgetManager.close(widgetManager.active.pop());
      } else {
        widgetManager.open(target.id.replace((/^widget-/), ''));
      }
    }

  });

  /* Conversation List
   var convoLIs = document.querySelectorAll('#slide-messages ul > li'),
   convoClick = function(){
   var subPane = document.querySelector('#slide-messages-conversation.subPane');
   subPane.querySelector('span').innerHTML = this.innerHTML;
   subPane.classList.remove('hidden');
   console.log('clicked:', this);
   };

   for( i = 0 ; i < convoLIs.length ; i++){
   convoLIs[i].addEventListener('click', convoClick);
   }

   // Close Button for Conversations
   document.querySelector('#slide-messages-conversation > button.close')
   .addEventListener('click', function(){
   this.parentNode.classList.add('hidden');
   });
   /

})(window);*/
