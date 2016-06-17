isMobileDecorator
=====================

ES7 Decorator, adds "isMobile" prop to React Component.

## Usage


`@isMobile()`

or

`@isMobile(breakpoint)`

where breakpoint is number, default 768

example:

```javascript
import React, { Component } from 'react';
import { isMobile } from 'isMobileDecorator';

@isMobile(640)

class Example extends Component {
  render () {
    // following prop is awailable:
    //  `isMobile`  : true/false

    return <div>
      {this.props.isMobile && (
        <p>Only in mobile!</p>
      )}
    </div>;
  }
}
```

## License

MIT
