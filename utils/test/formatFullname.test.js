const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

const mockData = {
  'john doe' : 'John Doe',
  'JOHN DOE' : 'John Doe',
  'jOHn doE' : 'John Doe',
  'johN Doe' : 'John Doe',
};

describe('formatFullname', () => {
  
  it('should return an error if "fullName" argument is not a string', () => {
    expect(formatFullname(null)).to.equal('Error');
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');   
  });
  it('should return an error if "fullName" argument is not a 2 words string', () => {
    expect(formatFullname('')).to.equal('Error');
    expect(formatFullname('Jan')).to.equal('Error');
    expect(formatFullname('Jan Roch Lech')).to.equal('Error');
  });
  it('should return proper format of a 2 words string, john doE -> John Doe', () => {
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('jOHn doE')).to.equal('John Doe');    
    expect(formatFullname('John Doe')).to.equal('John Doe');
  });
 
});